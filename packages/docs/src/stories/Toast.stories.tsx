import type { Meta, StoryObj } from '@storybook/react'
import { ToastComponent } from '@ana-ignite-ui-design-system/react/src/index'
import { ToastComponentProps } from '@ana-ignite-ui-design-system/react/src/components/Toast/index'
import React, { useState } from 'react'

export default {
  title: 'Surfaces/Toast',
  component: ToastComponent,
  decorators: [
    () => {
      const [showToast, setShowToast] = useState(false) 

      return (
        <button onClick={() => setShowToast(!showToast)}>
          AQUI
          <ToastComponent title="Agendamento realizado" description="Quarta-feira, 23 de Outubro às 16h" showToast={showToast} />
        </button>
      )
    },
  ],
} as Meta<ToastComponentProps>

export const Primary: StoryObj<ToastComponentProps> = {}

