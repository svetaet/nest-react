const q = [],
	cache = {}

function randomNaming(length, limit) {
	let result = ''
	const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'
	/*All valid chars*/
	const fchars = 'abcdefghjklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_'
	/*All valid first chars*/

	do {
		if (q.length >= 52 * Math.pow(64, limit - 1) && limit >= length) {
			return 'OutOfPossibility'
		} else if (q.length >= 52 * Math.pow(64, limit - 1) && limit < length) {
			++limit
		}
		result = ''
		result += fchars[Math.floor(Math.random() * fchars.length)]
		for (let i = limit - 1; i > 0; --i) {
			result += chars[Math.floor(Math.random() * chars.length)]
		}
	} while (q.includes(result))
	q.push(result) /*push for avoiding collision in next time of funtion call*/
	return result
}

module.exports = (loaderContext, localIdentName, localName) => {
	let randName = randomNaming(3, 2)
	if (localName.match(/^i-/i)) {
		randName = `i-${randName}`
	} else if (localName.match(/^i_/i)) {
		randName = `i_`
	} else {
		randName = `${randName}`
	}
	if (typeof cache[localName] == 'undefined') {
		cache[localName] = randName
		return cache[localName]
	} else {
		return cache[localName]
	}
}
