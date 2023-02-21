import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react/src/index'

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
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
