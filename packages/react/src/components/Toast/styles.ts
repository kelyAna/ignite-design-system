import { styled } from '../../styles'

export const ToastComponentContainer = styled('div', {})

export const ToastContent = styled('div', {
  alignItems: 'flex-start',
  padding: '12px 20px',
  gap: '$2',

  position: 'absolute',
  width: '360px',
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

export const ToastTitle = styled('p', {
  color: 'white',
  fontFamily: 'Roboto',
  fontSize: '$lg',
})

export const ToastDescription = styled('p', {
  color: '$gray200',
  fontFamily: 'Roboto',
  fontSize: '$sm',

  textAlign: 'start',
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
})
