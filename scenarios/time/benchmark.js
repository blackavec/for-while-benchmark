const { plot } = require('nodeplotlib')
const { attempts, totalExecutionLimit } = require('../../config')
const { sum, average, convertHRtime } = require('../../common')

const forSuite = require('./for')
const whileSuite = require('./while')

const results = {
  for: [],
  while: []
}

console.log(`Each scenario will be tested ${attempts.toLocaleString()} times, for ${totalExecutionLimit.toLocaleString()} cycles.\n`)

for (let i = 1; i <= attempts; i++) {
  results.for.push(convertHRtime(forSuite.scenario()).milliseconds)
}

for (let i = 1; i <= attempts; i++) {
  results.while.push(convertHRtime(whileSuite.scenario()).milliseconds)
}

const minFor = Math.min(...results.for)
const minWhile = Math.min(...results.while)

const avgFor = average(results.for)
const avgWhile = average(results.while)

const sumFor = sum(results.for)
const sumWhile = sum(results.while)

console.log(`\n[FOR] Sum: ${sumFor} ms, Average: ${avgFor} ms, Min: ${minFor} ms`)
console.log(`[WHILE] Sum: ${sumWhile} ms, Average: ${avgWhile} ms, Min: ${minWhile} ms`)

console.log(`\n\nIn average [${ avgFor < avgWhile ? 'FOR' : 'WHILE'}] is the fastest.`)
console.log(`In minimum [${ minFor < minWhile ? 'FOR' : 'WHILE'}] is the fastest.`)
console.log(`In Sum [${ sumFor < sumWhile ? 'FOR' : 'WHILE'}] is the fastest.`)

const forTrace = {y: results.for, x: Object.keys(results.for), type: 'scatter', name: 'For'}
const whileTrace = {y: results.while, x: Object.keys(results.while), type: 'scatter', name: 'While'}

plot([forTrace, whileTrace])

