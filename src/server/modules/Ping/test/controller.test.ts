import { Test, TestingModule } from '@nestjs/testing'

import { PingController } from '../controller'
import { PingService } from '../service'

describe('PingController', () => {
	let app: TestingModule

	beforeAll(async () => {
		app = await Test.createTestingModule({
			controllers: [PingController],
			providers: [PingService],
		}).compile()
	})

	describe('/ping endpoint', () => {
		it('should return "Hello World!"', () => {
			const pingController = app.get<PingController>(PingController)
			expect(pingController.ping({ text: 'Required body' })).toStrictEqual({ text: 'Hello World!' })
		})
	})
})
