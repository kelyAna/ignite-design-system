import { ComponentProps, styled } from '@stitches/react'
import { ElementType } from 'react'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      xxs: { fontFamily: '$xxs' },
      xs: { fontFamily: '$xs' },
      sm: { fontFamily: '$sm' },
      md: { fontFamily: '$md' },
      lg: { fontFamily: '$lg' },
      xl: { fontFamily: '$xl' },
      '2xl': { fontFamily: '$2xl' },
      '4xl': { fontFamily: '$4xl' },
      '5xl': { fontFamily: '5xl' },
      '6xl': { fontFamily: '$6xl' },
      '7xl': { fontFamily: '$7xl' },
      '8xl': { fontFamily: '$8xl' },
      '9xl': { fontFamily: '$9xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}

Text.displayName = 'Text'
