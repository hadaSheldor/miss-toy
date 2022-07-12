export const utilService = {
  saveToStorage,
  loadFromStorage,
  makeId,
  formatTime,
  getRandomIntInclusive,
  getRandomColor,
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value) || null)
}

function loadFromStorage(key) {
  let data = localStorage.getItem(key)
  return data ? JSON.parse(data) : undefined
}

function makeId(length = 8) {
  var txt = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}

function formatTime(timeStamp) {
  const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
  })

  const date = new Date(timeStamp)
  const now = Date.now()
  const diff = now - timeStamp
  const day = 1000 * 60 * 60 * 24

  if (diff < day) return 'Today'
  if (diff < day * 2) return 'Yesterday'
  return longEnUSFormatter.format(date)
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
