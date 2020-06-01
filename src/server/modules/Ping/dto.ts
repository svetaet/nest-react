import { IsString } from 'class-validator'

export class PingDto {
	@IsString()
	text!: 'Required body'
}
