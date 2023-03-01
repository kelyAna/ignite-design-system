import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastContainer = styled(Toast.Provider, {})

export const ToastContent = styled(Toast.Root, {
  alignItems: 'flex-start',
  padding: '12px 20px',
  gap: '$2',

  position: 'absolute',
  width: '360px',
  height: '82px',
  right: '32px',
  bottom: '32px',

  background: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '6px',
})

export const ToastButton = styled('button', {
  border: 0,
  borderRadius: '20px',
  width: '$40',
  height: '$10',
  backgroundColor: '$ignite500',
  color: '$white',

  fontSize: '$md',
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontFamily: 'Roboto',
  fontSize: '$lg',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontFamily: 'Roboto',
  fontSize: '$sm',
})

export const ToastCloseButton = styled('button', {
  background: 'transparent',
  border: 0,
  color: '$gray200',
  cursor: 'pointer',
})

export const ToastHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  marginTop: '$3',
})
