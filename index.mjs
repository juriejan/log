
import chalk from 'chalk'
import moment from 'moment'

class Log {
	log (message) {
		let timestamp = chalk.grey(`[${moment().format('hh:mm:ss')}]`)
		console.log(`${timestamp} ${message}`)
	}
	error (err) {
		let message = ''
		if (err.filename) message += `${err.filename}: `
		message += (err.stack || err.message || err)
		this.log(chalk.red(message))
	}
	info (message) {
		this.log(chalk.white(message))
	}
}

export default Log
