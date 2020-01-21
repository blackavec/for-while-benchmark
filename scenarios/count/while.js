const { add } = require('../../script') 
const { setInitialTime, hasTimeout } = require('../../common')
const { executionDuration } = require('../../config')

module.exports.scenario = function() {
  setInitialTime()
  
  let runCycles = 0
  while (true) {
    // do the calculation
    add(2, 2)
  
    // make it count
    runCycles++
  
    // kick it out of loop if reached time limit
    if (hasTimeout())
      break
  }
  
  console.log(`Total ${executionDuration.toLocaleString()} second run, executed "${runCycles.toLocaleString()}" times`)

  return runCycles
}
