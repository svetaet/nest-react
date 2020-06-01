const merge = require('webpack-merge')
const NodeExternals = require('webpack-node-externals')
const NodemonPlugin = require('nodemon-webpack-plugin')
const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin')

const { paths } = require('./paths')
const getCommonConfig = require('./getCommonConfig')

module.exports = (env, argv) =>
	merge(getCommonConfig(env, argv), {
		entry: paths.server.entry,
		output: { path: paths.server.output, filename: 'main.js' },
		devtool: 'source-map',
		target: 'node',
		node: {
			global: false,
			__filename: false,
			__dirname: false,
		},
		plugins: [
			new UnusedFilesWebpackPlugin({
				patterns: ['src/server/**/*.*', 'src/common/**/*.*'],
				globOptions: { ignore: ['**/*.d.ts', '**/*.test.ts'] },
			}),
			new NodemonPlugin(),
		],
		externals: [NodeExternals()],
	})
