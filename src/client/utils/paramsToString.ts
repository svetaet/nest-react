type Union = string | number
export type ParamsT = { [key in Union]: Union }

export const paramsToString = (params: ParamsT) =>
	params.length === 0
		? ''
		: '?' +
		  Object.entries(params)
				.map(([key, value]) => `${key}=${value}`)
				.join('&')
