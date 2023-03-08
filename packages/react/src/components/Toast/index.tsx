import { X } from 'phosphor-react'
import React from 'react'
import {
  ToastCloseButton,
  ToastComponentContainer,
  ToastContent,
  ToastDescription,
  ToastHeader,
  ToastTitle,
} from './styles'

interface ToastComponentProps {
  title: string
  description: string
  showToast: boolean
}

export const ToastComponent = ({
  description,
  title,
  showToast,
}: ToastComponentProps) => {
  return (
    <ToastComponentContainer>
      {showToast && (
        <ToastContent>
          <ToastHeader>
            <ToastTitle>{title}</ToastTitle>
            <ToastCloseButton onClick={() => !showToast}>
              <X size={24} />
            </ToastCloseButton>
          </ToastHeader>
          <ToastDescription>{description}</ToastDescription>
        </ToastContent>
      )}
    </ToastComponentContainer>
  )
}
