import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { ToastComponent } from '..'

describe('Tooltip', () => {
  test('should render the content correctly', () => {
    const showToast = false
    const baseDom = render(
      <button onClick={() => !showToast}>
        Toast button
        <ToastComponent
          title="Agendamento realizado"
          description="Quarta-feira, 23 de Outubro às 16h"
          showToast
        />
      </button>,
    )

    fireEvent.click(baseDom.getByText('Toast button'))
    expect(screen.getByText('Agendamento realizado'))
  })
})
