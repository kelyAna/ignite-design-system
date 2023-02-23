import { styled } from '@stitches/react'
import { ComponentProps } from 'react'

export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $grat600',
})

export interface BoxProps extends ComponentProps<typeof Box> {}

Box.displayName = 'Box'
