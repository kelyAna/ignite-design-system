import React, { ComponentProps } from 'react'
import { User } from 'phosphor-react'
import { AvatarConatiner, AvatarFallback, AvatarImage } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export const Avatar = (props: AvatarProps) => {
  return (
    <AvatarConatiner>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarConatiner>
  )
}
