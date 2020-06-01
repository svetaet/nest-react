import { Controller, Body, Post, ValidationPipe } from '@nestjs/common'

import { EndpointResponseT } from 'common/apiContract'

import { PingService } from './service'
import { PingDto } from './dto'

@Controller()
export class PingController {
	constructor(private readonly service: PingService) {}

	@Post('/ping')
	ping(@Body(ValidationPipe) body: PingDto): EndpointResponseT<'ping'> {
		console.log(body.text)
		return this.service.ping()
	}
}
