import { Tooltip, TooltipProps } from '@ana-ignite-ui-design-system/react/src/index'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    children: 'Example tooltip',
    description: '21 de Outubro - Indisponível'
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
