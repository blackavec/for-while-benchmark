const { add } = require('../../script')
const { totalExecutionLimit } = require('../../config')
const { setInitialTime, timeDiff } = require('../../common')

module.exports.scenario = function() {
  let runCycles = totalExecutionLimit

  setInitialTime()
  for (;;) {
    // do the calculation
    add(2, 2)
  
    if (!runCycles--)
      break
  }

  const time = timeDiff()
  
  // console.log(`"${totalExecutionLimit}" execution took "${parseFloat(time.join('.'))}ms" to execute.`)

  return time
}
