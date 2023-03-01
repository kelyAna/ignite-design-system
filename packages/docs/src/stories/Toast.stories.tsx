import type { Meta, StoryObj } from '@storybook/react'
import { BoxProps, ToastComponent } from '@ana-ignite-ui-design-system/react/src/index'

export default {
  title: 'Surfaces/Toast',
  component: ToastComponent,
  args: {
    title: 'Toast component',
    description: '',
    date: '2021-01-01T12:00:00-04:00'
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

