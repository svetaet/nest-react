import { URL } from 'common/constants'
import { paramsToString, ParamsT } from 'utils/paramsToString'

export type ResponseT<R> = Promise<R | undefined>

export const request = async <R = undefined>(endpoint: string, body?: any, params?: ParamsT): ResponseT<R> => {
	try {
		const query = params ? paramsToString(params) : ''
		const options = body && {
			method: 'POST',
			body: JSON.stringify(body),
			headers: { 'Content-Type': 'application/json' },
		}

		const response = await fetch(URL + endpoint + query, options)

		const result: R = await response.json()
		if (!response.ok) {
			console.log(result)
			return undefined
		}

		return result
	} catch (err) {
		console.error(err)
	}
}
