import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Tooltip } from '..'

describe('Tooltip', () => {
  test('should render the content correctly', () => {
    const baseDom = render(
      <Tooltip description="21 de Outubro - Indisponível">
        <p>21</p>
      </Tooltip>,
    )

    fireEvent.mouseMove(baseDom.getByText('21'))
    expect(screen.getByText('21 de Outubro - Indisponível'))
  })
})
