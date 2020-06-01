import { memo } from 'react'

import { Square } from './Square'
export * from './Square'

const MemoSquare = memo(Square)

export { MemoSquare as Square }
