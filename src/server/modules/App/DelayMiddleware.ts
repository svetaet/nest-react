import { Injectable, NestMiddleware } from '@nestjs/common'

const DELAY = 700

@Injectable()
export class DelayMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: () => void) {
		setTimeout(next, DELAY)
	}
}
