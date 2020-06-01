import { NestFactory } from '@nestjs/core'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import fastify from 'fastify'

import { PORT, RUNNING_LOCALLY, DOCKERIZING } from 'common/constants'
import { AppModule } from 'modules/App'

async function bootstrap() {
	const adapter = fastify()
	const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(adapter))

	console.log({ RUNNING_LOCALLY, DOCKERIZING })
	if (RUNNING_LOCALLY) app.enableCors()

	// fastify + docker is not a simple recipe https://github.com/fastify/fastify/issues/935#issuecomment-388569718
	await app.listen(PORT, DOCKERIZING ? '0.0.0.0' : '127.0.0.1', (err, addr) => {
		console.log(err || `Running on ${addr}`)
	})
}

bootstrap()
