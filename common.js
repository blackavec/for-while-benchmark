const { executionDuration } = require('./config')

let initialTime = undefined

function getCurrentTime() {
  return Date.now()
}

function timeDiff() {
  return process.hrtime(initialTime)
}

module.exports.setInitialTime = function() {
  initialTime = process.hrtime()
}

module.exports.hasTimeout = function() {
  return timeDiff()[0] > executionDuration
}

module.exports.timeDiff = timeDiff

module.exports.average = arr => arr.reduce( (p, c) => p + c, 0 ) / arr.length
module.exports.sum = arr => arr.reduce( (a, b) => a + b, 0)

module.exports.convertHRtime = hrtime => {
	const nanoseconds = (hrtime[0] * 1e9) + hrtime[1];
	const milliseconds = nanoseconds / 1e6;
	const seconds = nanoseconds / 1e9;

	return {
		seconds,
		milliseconds,
		nanoseconds
	};
};