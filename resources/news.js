const request = require('request')
const cheerio = require('cheerio')

module.exports = function getRandomNews() {
 
  return new Promise((resolve, reject) => {
    request('http://www.geekpark.net/', (err, res) => {
      if(err) {
        return reject([])
      }

      // 找到新闻早知道的链接
      const $ = cheerio.load(res.body)
      const newspath = 'http://www.geekpark.net' + $($('.article-info>a:contains(极客早知道)+div+a')[0]).attr('href')
      console.log(newspath)

      const news = []
      
      // 下载新闻
      request(newspath, (err, res) => { 
        if(err) {
          return reject([])
        }
        const $ = cheerio.load(res.body)
        const titles = $('.article-content h2')
        console.log(titles.length)

        ;[].slice.call(titles, 0).forEach(title => {
          const blocks = $(title).nextUntil('h2')
          news.push({
            title: $(title).text(),
            blocks: [].slice.call(blocks, 0).map(block => {
              if(block.tagName === 'p') {
                return {
                  type: 'text',
                  content:  $(block).text()
                }
              } else if(/img.*?src="(.*?)"/.test( $(block).html())){
                return {
                  type: 'image',
                  content: RegExp.$1
                }
              }

              return null;
            })
          })
        })
      
        resolve({
          newspath,
          news
        })
      })
    })
  })
}