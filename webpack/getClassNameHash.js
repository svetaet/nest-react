const loaderUtils = require('loader-utils')
const path = require('path')

module.exports = (context, localIdentName, localName) =>
	'_' +
	loaderUtils.getHashDigest(
		path.posix.relative(context.rootContext, context.resourcePath) + localName,
		'md5',
		'base64',
		4,
	)
