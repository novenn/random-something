
module.exports = function getRandomImage(config) {
  if(config && config.length) {
    const images = config
    var index = Math.floor(images.length * Math.random())
    return images[index]
  }
  var index = Math.floor(100 * Math.random())
  return `https://cdn.novenn.com/random/avatars/${index}.jpg`
}