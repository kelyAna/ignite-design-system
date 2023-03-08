import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  cursor: 'pointer',
  height: '44px',
  flexDirection: 'column',
  display: 'flex',

  p: {
    visibility: 'hidden',
    width: '209px',
    background: '$gray900',
    textAlign: 'center',
    color: '$gray100',
    borderRadius: '5px',
    padding: '12px 16px',
    fontSize: '14px',

    zIndex: 1,
    bottom: '100%',
    left: '50%',
  },

  'p::before': {
    bottom: '-42px',
    content: '',
    display: 'block',
    height: '20px',
    position: 'absolute',
    borderColor: '#a9a9a9 transparent transparent transparent',
    borderStyle: 'solid',
    borderWidth: '11px',
  },

  'p::after': {
    content: '',
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderTop: '10px solid $gray900',
    marginBottom: '20px',

    top: '70px',
    height: 0,
    left: '9%',
    position: 'absolute',
    width: '3px',

    transform: 'translate(-50%)',
    textAlign: 'center',
  },

  '&:hover': {
    p: {
      visibility: 'visible',
      display: 'block',
    },
  },
})
