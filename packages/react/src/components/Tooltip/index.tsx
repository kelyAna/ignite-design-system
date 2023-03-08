import React, { ReactElement } from 'react'
import { TooltipContainer } from './styles'

export interface TooltipProps {
  children: ReactElement
  description: string
}

export const Tooltip = ({ children, description }: TooltipProps) => {
  return (
    <TooltipContainer>
      <p>{description}</p>
      {children}
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
