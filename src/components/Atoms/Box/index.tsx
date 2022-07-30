import React from 'react'
import { IBoxProps } from './types'
import { Container } from './styles'

export function Box({ children }: IBoxProps) {
  return <Container>{children}</Container>
}
