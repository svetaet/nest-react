const fs = require('fs')
const path = require('path')

class DeleteFilesPlugin {
	constructor({ dir, test }) {
		this.test = test
		this.dir = dir
	}
	apply(compiler) {
		compiler.hooks.done.tapAsync('DeleteFilesPlugin', () =>
			fs
				.readdirSync(this.dir)
				.filter(file => this.test.test(file))
				.map(f => fs.unlinkSync(path.join(this.dir, f))),
		)
	}
}

module.exports = { DeleteFilesPlugin }
