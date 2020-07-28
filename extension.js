// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const getRandomName = require('./resources/name');
const getRandomSaying= require('./resources/saying');
const getRandomContent= require('./resources/content');
const getRandomImage = require('./resources/image');
const getRandomAvatar = require('./resources/avatar');
const getRandomEmail = require('./resources/email');
const getRandomTel = require('./resources/tel');
const getRandomAddress = require('./resources/address');
const getRandomSchool = require('./resources/school');
const getRandomWWW = require('./resources/www');
const getRandomFunny = require('./resources/funny');
const getRandomNews = require('./resources/news');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "random-something" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  
  const mapper = {
    'name': getRandomName,
    'saying': getRandomSaying,
    'content': getRandomContent,
    'image': getRandomImage,
    'avatar': getRandomAvatar,
    'email': getRandomEmail,
    'www': getRandomWWW,
    'tel': getRandomTel,
    'school': getRandomSchool,
    'address': getRandomAddress,
    'funny': getRandomFunny,
  }

  Object.entries(mapper).forEach(p => {
    let command = vscode.commands.registerCommand('random-something.'+p[0], function () {
      vscode.window.activeTextEditor.edit(editBuilder => {
        var selections = vscode.window.activeTextEditor.selections
        selections.forEach(selection => {
          editBuilder.insert(new vscode.Position(selection.start.line, selection.start.character), p[1]());
        })
      })
    });
    context.subscriptions.push(command);
  })

  let news = vscode.commands.registerCommand('random-something.news', async function() {
    const res = await getRandomNews()
    const panel = vscode.window.createWebviewPanel(
      'news', // Identifies the type of the webview. Used internally
      '每日新闻', // Title of the panel displayed to the user
      vscode.ViewColumn.One, // Editor column to show the new webview panel in.
      {} // Webview options. More on these later.
    );
    
    let news = '';
    res.forEach(element => {
      news += `<a href="${element.link}">${element.title}</a><br /><br />`
    });

    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>每日新闻</title>
    </head>
    <body>
      <div style="width: 500px; margin:auto">
        <h3>每日新闻</h3>
        <div>${news}</div>
      </div>
    </body>
    </html>`
    panel.webview.html = html
   
  })
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
