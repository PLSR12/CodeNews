import React from 'react'

import * as S from './styles'
import IButtonProps from './types'

export function Button({ children, type, ...props }: IButtonProps) {
  return (
    <S.ComponentButton {...props} type="submit">
      {children}
    </S.ComponentButton>
  )
}
