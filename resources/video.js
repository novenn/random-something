module.exports = function getRandomName(format, config) {
  if(format instanceof Array) {
    config = format
  }
  if(config && config.length) {
    const videos = config
    var index = Math.floor(videos.length * Math.random())
    return videos[index]
  }
  var index = Math.floor(13 * Math.random()) + 1
  format = ['mp4', 'flv', 'm3u8'].includes(format) ? format: 'mp4'
  return `https://cdn.novenn.com/random/videos/${index}.${format}`
}