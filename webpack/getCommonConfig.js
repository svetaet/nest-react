const { EnvironmentPlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin')
require('dotenv').config()

const { paths } = require('./paths')

module.exports = (env, argv) => {
	const plugins = [new CleanWebpackPlugin(), new EnvironmentPlugin({ DOCKERIZING: null, RUNNING_LOCALLY: false })]
	const mode = (process.env.NODE_ENV = argv.mode || 'production')
	if (mode === 'development') plugins.push(new CleanTerminalPlugin({ beforeCompile: true }))

	return {
		mode,
		stats: 'minimal',
		plugins,
		module: {
			rules: [
				{
					test: /\.(ts|tsx|js|json)$/,
					include: paths.src,
					loader: ['babel-loader', { loader: 'eslint-loader', options: { fix: true } }],
				},
			],
		},
		resolve: {
			modules: ['node_modules', 'src', 'src/client', 'src/server'],
			extensions: ['.ts', '.tsx', '.js', '.json', '.scss'],
		},
	}
}
