import { ParamsT } from 'utils/paramsToString'

import { request, ResponseT } from './request'

function createRequest<R>(endpoint: string): () => ResponseT<R>
function createRequest<R, B>(endpoint: string): (body: B) => ResponseT<R>
function createRequest<R, B, P extends ParamsT>(endpoint: string): (body: B, params: P) => ResponseT<R>

function createRequest<R, B, P extends ParamsT>(endpoint: string) {
	return (body: B, params: P) => request<R>(endpoint, body, params)
}

export { createRequest }
