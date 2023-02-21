import { styled } from '@stitches/react'
import { ComponentProps } from 'react'

export const Box = styled('div', {
  padding: '$d',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $grat600',
})

export interface BoxProps extends ComponentProps<typeof Box> {}
