import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'

import { ConfigProvider } from 'providers/Config'
import { devModeProvider } from 'providers/DevMode'
import { PingModule } from 'modules/Ping'

import { DelayMiddleware } from './DelayMiddleware'

@Module({
	providers: [ConfigProvider, devModeProvider],
	imports: [PingModule],
})
export class AppModule implements NestModule {
	constructor(public config: ConfigProvider) {}

	configure(consumer: MiddlewareConsumer) {
		if (this.config.devMode) consumer.apply(DelayMiddleware).forRoutes('*')
	}
}
