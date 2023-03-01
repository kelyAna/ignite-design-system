import * as React from 'react'
import * as Toast from '@radix-ui/react-toast'
import {
  ToastButton,
  ToastCloseButton,
  ToastContainer,
  ToastContent,
  ToastDescription,
  ToastHeader,
  ToastTitle,
} from './styles'
import { X } from 'phosphor-react'
import { oneWeekAway } from './utils/onWeekDay'
import { prettyDate } from './utils/prettyDate'

interface ToastComponentProps {
  title: string
  date: string
}

export const ToastComponent = ({ title, date }: ToastComponentProps) => {
  const [open, setOpen] = React.useState(false)
  const eventDateRef = React.useRef(new Date())
  const timerRef = React.useRef(0)

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <ToastContainer swipeDirection="right">
      <ToastButton
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway(date)
            setOpen(true)
          }, 100)
        }}
      >
        Toast Component
      </ToastButton>

      <ToastContent open={open} onOpenChange={setOpen}>
        <ToastHeader>
          <ToastTitle>{title}</ToastTitle>
          <Toast.Action asChild altText="Goto schedule to undo">
            <ToastCloseButton>
              <X size={24} />
            </ToastCloseButton>
          </Toast.Action>
        </ToastHeader>
        <ToastDescription asChild>
          <time dateTime={eventDateRef.current.toISOString()}>
            {prettyDate(eventDateRef.current)}
          </time>
        </ToastDescription>
      </ToastContent>
      <Toast.Viewport className="ToastViewport" />
    </ToastContainer>
  )
}
