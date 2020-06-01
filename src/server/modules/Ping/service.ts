import { Injectable } from '@nestjs/common'

import { EndpointResponseT } from 'common/apiContract'

@Injectable()
export class PingService {
	ping(): EndpointResponseT<'ping'> {
		return { text: 'Hello World!' }
	}
}
