import { memo } from 'react'

import { Button } from './Button'
export * from './Button'

const MemoButton = memo(Button)
export { MemoButton as Button }
