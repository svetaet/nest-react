const path = require('path')

const paths = {
	src: path.resolve('src'),
	client: {
		entry: './src/client/index.tsx',
		output: path.resolve('dist', 'client'),
	},
	server: {
		entry: './src/server/main.ts',
		output: path.resolve('dist', 'server'),
	},
}

module.exports = { paths }
