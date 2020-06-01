import { ValueProvider } from '@nestjs/common'

import { DEV_MODE as DEV_MODE_TOKEN } from 'tokens'
import { DEV_MODE } from 'common/constants'

export const devModeProvider: ValueProvider<boolean> = {
	provide: DEV_MODE_TOKEN,
	useValue: DEV_MODE,
}
