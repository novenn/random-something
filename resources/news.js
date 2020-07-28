const request = require('request')
const cache = require('vscode-cache')

module.exports = function getRandomNews() {
  return new Promise((resolve, reject) => {
    request('https://interface.sina.cn/ent/feed.d.json?ch=blog', (err, res) => {
      const data = JSON.parse(res.body)
      resolve(data['data'])
    })
  })
}