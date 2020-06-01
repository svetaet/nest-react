import { EndpointBodyT, EndpointParamsT, EndpointResponseT, EndpointsT } from 'common/apiContract'
import { request } from './request'

export type ApiMethodT<
	E extends EndpointsT,
	B extends EndpointBodyT<E> = EndpointBodyT<E>,
	P extends EndpointParamsT<E> = EndpointParamsT<E>,
	R extends EndpointResponseT<E> = EndpointResponseT<E>
> = P extends undefined ? (B extends undefined ? () => R : (body: B) => R) : (body: B, params: P) => R

export const createApiMethod = <
	E extends EndpointsT,
	B extends EndpointBodyT<E> = EndpointBodyT<E>,
	P extends EndpointParamsT<E> = EndpointParamsT<E>,
	R extends EndpointResponseT<E> = EndpointResponseT<E>
>(
	endpoint: E,
) => {
	const apiMethod = (body: B, params: P) => request<R>(endpoint, body, params)
	return (apiMethod as unknown) as ApiMethodT<E>
}
