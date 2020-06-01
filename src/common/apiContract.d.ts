import { PingDto } from 'modules/Ping'

export type ApiContract = {
	ping: {
		response: { text: 'Hello World!' }
		body: PingDto
		params: undefined
	}
}

export type EndpointOptionsT = 'response' | 'body' | 'params'
export type EndpointsT = keyof ApiContract

export type EndpointPropT<E extends EndpointsT, P extends EndpointOptionsT> = ApiContract[E][P]
export type EndpointResponseT<E extends EndpointsT> = EndpointPropT<E, 'response'>
export type EndpointBodyT<E extends EndpointsT> = EndpointPropT<E, 'body'>
export type EndpointParamsT<E extends EndpointsT> = EndpointPropT<E, 'params'>
