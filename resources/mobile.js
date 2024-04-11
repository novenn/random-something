module.exports = function getRandomName() {
  const numbers = Array(10).fill(null).map(i => Math.floor(Math.random() * 10))
  return "1" + Math.max(3, numbers[0]) + numbers.slice(1).join('')
}