const Curray = require('./Curray')


console.info('TEST Curray.prototype.keys.js')

console.info('CASE keys in Curray')

const letters = new Curray('a', 'b', 'c')
const iterator = letters.keys()

const next = iterator.next()

console.assert(next.value === 0, 'next value is 0')
console.assert(next.done === false, 'next done is false')

next = iterator.next()

console.assert(next.value === 1, 'next value is 1')
console.assert(next.done === false, 'next done is false')

next = iterator.next()

console.assert(next.value === 2, 'next value is 2')
console.assert(next.done === false, 'next done is false')

next = iterator.next()

console.assert(next.value === undefined, 'next value is undefined')
console.assert(next.done === true, 'next done is true')

