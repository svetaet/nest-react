import { createRequest } from './createRequest'
import { EndpointResponseT, EndpointBodyT } from 'common/apiContract'

export const api = {
	ping: createRequest<EndpointResponseT<'ping'>, EndpointBodyT<'ping'>>('ping'),
	// Instead of createRequest it is possible to use createApiMethod:
	// ping: createApiMethod('ping'),
}
