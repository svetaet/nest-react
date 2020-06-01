export const PORT = 3000

export const DEV_MODE = process.env.NODE_ENV === 'development'
export const DOCKERIZING = process.env.DOCKERIZING === 'true'
export const RUNNING_LOCALLY = process.env.RUNNING_LOCALLY === 'true'

export const URL = RUNNING_LOCALLY
	? DOCKERIZING
		? `http://localhost:${PORT}/api/`
		: `http://localhost:${PORT}/`
	: `http://cite-domain/api/`
