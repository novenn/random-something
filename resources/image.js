const images = [
  'https://cdn.novenn.com/random/images/2020-04-04.jpg',
  'https://cdn.novenn.com/random/images/2020-04-05.jpg',
  'https://cdn.novenn.com/random/images/2020-04-06.jpg',
  'https://cdn.novenn.com/random/images/2020-04-07.jpg',
  'https://cdn.novenn.com/random/images/2020-04-08.jpg',
  'https://cdn.novenn.com/random/images/2020-04-09.jpg',
  'https://cdn.novenn.com/random/images/2020-04-10.jpg',
  'https://cdn.novenn.com/random/images/2020-04-11.jpg',
  'https://cdn.novenn.com/random/images/2020-04-12.jpg',
  'https://cdn.novenn.com/random/images/2020-04-13.jpg',
  'https://cdn.novenn.com/random/images/2020-04-14.jpg',
  'https://cdn.novenn.com/random/images/2020-04-15.jpg',
  'https://cdn.novenn.com/random/images/2020-04-16.jpg',
  'https://cdn.novenn.com/random/images/2020-04-17.jpg',
  'https://cdn.novenn.com/random/images/2020-04-18.jpg',
  'https://cdn.novenn.com/random/images/2020-04-19.jpg',
  'https://cdn.novenn.com/random/images/2020-04-20.jpg',
  'https://cdn.novenn.com/random/images/2020-04-21.jpg',
  'https://cdn.novenn.com/random/images/2020-04-22.jpg',
  'https://cdn.novenn.com/random/images/2020-04-23.jpg',
  'https://cdn.novenn.com/random/images/2020-04-24.jpg',
  'https://cdn.novenn.com/random/images/2020-04-25.jpg',
  'https://cdn.novenn.com/random/images/2020-04-26.jpg',
  'https://cdn.novenn.com/random/images/2020-04-27.jpg',
  'https://cdn.novenn.com/random/images/2020-04-28.jpg',
  'https://cdn.novenn.com/random/images/2020-04-29.jpg',
  'https://cdn.novenn.com/random/images/2020-04-30.jpg',
  'https://cdn.novenn.com/random/images/2020-05-01.jpg',
  'https://cdn.novenn.com/random/images/2020-05-02.jpg',
  'https://cdn.novenn.com/random/images/2020-05-03.jpg',
  'https://cdn.novenn.com/random/images/2020-05-04.jpg',
  'https://cdn.novenn.com/random/images/2020-05-05.jpg',
  'https://cdn.novenn.com/random/images/2020-05-06.jpg',
  'https://cdn.novenn.com/random/images/2020-05-07.jpg',
  'https://cdn.novenn.com/random/images/2020-05-08.jpg',
  'https://cdn.novenn.com/random/images/2020-05-09.jpg',
  'https://cdn.novenn.com/random/images/2020-05-10.jpg',
  'https://cdn.novenn.com/random/images/2020-05-11.jpg',
  'https://cdn.novenn.com/random/images/2020-05-12.jpg',
  'https://cdn.novenn.com/random/images/2020-05-13.jpg',
  'https://cdn.novenn.com/random/images/2020-05-14.jpg',
  'https://cdn.novenn.com/random/images/2020-05-15.jpg',
  'https://cdn.novenn.com/random/images/2020-05-16.jpg',
  'https://cdn.novenn.com/random/images/2020-05-17.jpg',
  'https://cdn.novenn.com/random/images/2020-05-18.jpg',
  'https://cdn.novenn.com/random/images/2020-05-19.jpg',
  'https://cdn.novenn.com/random/images/2020-05-20.jpg',
  'https://cdn.novenn.com/random/images/2020-05-21.jpg',
  'https://cdn.novenn.com/random/images/2020-05-22.jpg',
  'https://cdn.novenn.com/random/images/2020-05-23.jpg',
  'https://cdn.novenn.com/random/images/2020-05-24.jpg',
  'https://cdn.novenn.com/random/images/2020-05-25.jpg',
  'https://cdn.novenn.com/random/images/2020-05-26.jpg',
  'https://cdn.novenn.com/random/images/2020-05-27.jpg',
  'https://cdn.novenn.com/random/images/2020-05-28.jpg',
  'https://cdn.novenn.com/random/images/2020-05-29.jpg',
  'https://cdn.novenn.com/random/images/2020-05-30.jpg',
  'https://cdn.novenn.com/random/images/2020-05-31.jpg',
  'https://cdn.novenn.com/random/images/2020-06-01.jpg',
  'https://cdn.novenn.com/random/images/2020-06-02.jpg',
  'https://cdn.novenn.com/random/images/2020-06-03.jpg',
  'https://cdn.novenn.com/random/images/2020-06-04.jpg',
  'https://cdn.novenn.com/random/images/2020-06-05.jpg',
  'https://cdn.novenn.com/random/images/2020-06-06.jpg',
  'https://cdn.novenn.com/random/images/2020-06-07.jpg',
  'https://cdn.novenn.com/random/images/2020-06-08.jpg',
  'https://cdn.novenn.com/random/images/2020-06-09.jpg',
  'https://cdn.novenn.com/random/images/2020-06-10.jpg',
  'https://cdn.novenn.com/random/images/2020-06-11.jpg',
  'https://cdn.novenn.com/random/images/2020-06-12.jpg',
  'https://cdn.novenn.com/random/images/2020-06-13.jpg',
  'https://cdn.novenn.com/random/images/2020-06-14.jpg',
  'https://cdn.novenn.com/random/images/2020-06-15.jpg',
  'https://cdn.novenn.com/random/images/2020-06-16.jpg',
  'https://cdn.novenn.com/random/images/2020-06-17.jpg',
  'https://cdn.novenn.com/random/images/2020-06-18.jpg',
  'https://cdn.novenn.com/random/images/2020-06-19.jpg',
  'https://cdn.novenn.com/random/images/2020-06-20.jpg',
  'https://cdn.novenn.com/random/images/2020-06-21.jpg',
  'https://cdn.novenn.com/random/images/2020-06-22.jpg',
  'https://cdn.novenn.com/random/images/2020-06-23.jpg',
  'https://cdn.novenn.com/random/images/2020-06-24.jpg',
  'https://cdn.novenn.com/random/images/2020-06-25.jpg',
  'https://cdn.novenn.com/random/images/2020-06-26.jpg',
  'https://cdn.novenn.com/random/images/2020-06-27.jpg',
  'https://cdn.novenn.com/random/images/2020-06-28.jpg',
  'https://cdn.novenn.com/random/images/2020-06-29.jpg',
  'https://cdn.novenn.com/random/images/2020-06-30.jpg',
  'https://cdn.novenn.com/random/images/2020-07-01.jpg',
  'https://cdn.novenn.com/random/images/2020-07-02.jpg',
  'https://cdn.novenn.com/random/images/2020-07-03.jpg',
  'https://cdn.novenn.com/random/images/2020-07-04.jpg',
  'https://cdn.novenn.com/random/images/2020-07-05.jpg',
  'https://cdn.novenn.com/random/images/2020-07-06.jpg',
  'https://cdn.novenn.com/random/images/2020-07-07.jpg',
  'https://cdn.novenn.com/random/images/2020-07-08.jpg',
  'https://cdn.novenn.com/random/images/2020-07-09.jpg',
  'https://cdn.novenn.com/random/images/2020-07-10.jpg',
  'https://cdn.novenn.com/random/images/2020-07-11.jpg',
  'https://cdn.novenn.com/random/images/2020-07-12.jpg',
  'https://cdn.novenn.com/random/images/2020-07-13.jpg',
  'https://cdn.novenn.com/random/images/2020-07-14.jpg',
  'https://cdn.novenn.com/random/images/2020-07-15.jpg',
  'https://cdn.novenn.com/random/images/2020-07-16.jpg',
  'https://cdn.novenn.com/random/images/2020-07-17.jpg',
  'https://cdn.novenn.com/random/images/2020-07-18.jpg',
  'https://cdn.novenn.com/random/images/2020-07-19.jpg',
  'https://cdn.novenn.com/random/images/2020-07-20.jpg',
  'https://cdn.novenn.com/random/images/2020-07-21.jpg',
  'https://cdn.novenn.com/random/images/2020-07-22.jpg',
  'https://cdn.novenn.com/random/images/2020-07-23.jpg',
  'https://cdn.novenn.com/random/images/2020-07-24.jpg',
  'https://cdn.novenn.com/random/images/2020-07-25.jpg',
  'https://cdn.novenn.com/random/images/2020-07-26.jpg',
  'https://cdn.novenn.com/random/images/2020-07-27.jpg',
]

module.exports = function getRandomImage() {
  var index = Math.floor(images.length * Math.random())
  return images[index]
}