// não aceita repetição / nao é indexada 

const { time } = require("console")

const times = new Set()

times.add('vasco')
times.add('flamengo').add('corinthians').add('palmeiras')
times.add ('vasco')


console.log(times,times.size,times.has('vasco'))
times.delete('flamengo')
console.log(times.has('flamengo'))