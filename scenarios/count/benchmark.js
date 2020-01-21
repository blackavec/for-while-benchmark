const { attempts } = require('../../config')

const forSuite = require('./for')
const whileSuite = require('./while')

const results = {
  for: 0,
  while: 0
}

console.log(`Each scenario will be tested for ${attempts.toLocaleString()} times.\n`)

console.log('\t[FOR]')
for (let i = 1; i <= attempts; i++) {
  results.for += forSuite.scenario()
}

console.log('\n\t[WHILE]')
for (let i = 1; i <= attempts; i++) {
  results.while += whileSuite.scenario()
}

const avgFor = results.for / attempts
const avgWhile = results.while / attempts

console.log(`\nAverage of [FOR] is ${avgFor.toLocaleString()}`)
console.log(`\nAverage of [WHILE] is ${avgWhile.toLocaleString()}`)

if (avgFor === avgWhile) {
  console.log(`\n\n[FOR] and [WHILE] are equally fast.`)
  
  return
}

console.log(`\n\n[${ avgFor > avgWhile ? 'FOR' : 'WHILE'}] is the fastest way to run loop`)
