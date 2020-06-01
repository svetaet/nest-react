import { Injectable, Inject } from '@nestjs/common'

import { DEV_MODE } from 'tokens'

@Injectable()
export class ConfigProvider {
	constructor(@Inject(DEV_MODE) public devMode: boolean) {}
}
