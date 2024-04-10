const vscode = require('vscode');
const utils = require('./utils')
const getRandomNews = require('./resources/news');

const handlers = {}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {


  const commands = ['name', 'saying', 'content', 'image', 'avatar','email', 'www', 'tel', 'school', 'address', 'funny', 'video', 'audio']


  const inputRules = {
    'video': {
      placeHolder: '输入格式（mp4、flv、m3u8）'
    },
    'content': {
      placeHolder: '需要多少字'
    }
  }

  const configuration = vscode.workspace.getConfiguration('randomSomething')
  commands.forEach( commandName => {
    const command = vscode.commands.registerCommand('random-something.'+commandName, async () => {
      const inputRule = inputRules[commandName]
      const config    = configuration.get(commandName)

      const handler = (...args) => {
        const instance = handlers[commandName] || require(`./resources/${commandName}`)
        handlers[commandName] = instance
        return instance(...args)
      }

      if(inputRule && (!config || !config.length)) {
        
        const input = await vscode.window.showInputBox(inputRule)
        utils.insert(vscode, handler.bind(null, input, config))

      } else {
        utils.insert(vscode, handler.bind(null, config))
      }
    });
    context.subscriptions.push(command);
  })

  let news = vscode.commands.registerCommand('random-something.news', function() {
    let html = `<!DOCTYPE html>
                  <html lang="en">
                  <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>每日新闻</title>
                  </head>
                  <body>
                    <div style="width: 800px; margin:auto">
                      {{body}}
                    </div>
                  </body>
                  </html>
                `
    const panel = vscode.window.createWebviewPanel(
      'news', // Identifies the type of the webview. Used internally
      '每日新闻', // Title of the panel displayed to the user
      vscode.ViewColumn.One, // Editor column to show the new webview panel in.
      {} // Webview options. More on these later.
    );
    panel.webview.html = html.replace('{{body}}', '正在加载...')
    getRandomNews().then(res => {
      let newshtml = ''
      res.news.forEach(element => {
        newshtml += `<h3 style="color: orange">${element.title}</h3>`
        element.blocks && element.blocks.forEach(block => {
          if(!block) {
            return
          }
          if(block.type === 'text') {
            newshtml += `<p>${block.content}</p>`
          } else  if(block.type === 'image') {
            newshtml += `<p><img src="${block.content}" width="100%"/></p>`
          }
        })
      });
      
      panel.webview.html = html.replace('{{body}}', 
        `
          <h3>每日新闻</h2>
          <div>来源<a href="${res.newspath}">极客公园</a></div>
          <div>${newshtml}</div>
        `
      )
    }).catch (error => {
      panel.webview.html = html.replace('{{body}}', '正在失败 :(')
    })
   
  })

  context.subscriptions.push(news);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
