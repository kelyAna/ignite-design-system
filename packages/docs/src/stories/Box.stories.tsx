import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ana-ignite-ui-design-system/react/src/index'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando</Text>
      </>
    ),
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
