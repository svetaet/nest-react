import { Module } from '@nestjs/common'
import { PingController } from './controller'
import { PingService } from './service'

@Module({
	controllers: [PingController],
	providers: [PingService],
})
export class PingModule {}
