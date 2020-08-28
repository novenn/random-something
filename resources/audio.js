module.exports = function getRandomName(config) {
  if(config && config.length) {
    const audios = config
    var index = Math.floor(audios.length * Math.random())
    return audios[index]
  }
  var index = Math.floor(11 * Math.random()) + 1
  return `https://cdn.novenn.com/random/audios/${index}.mp3`
}