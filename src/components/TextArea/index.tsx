import React from 'react'

import { Container, Error, Input, Label } from './styles'
import { IInputProps } from './types'

export function TextAreaComponent({
  register,
  validations,
  htmlFor,
  text,
  error,
  ...props
}: IInputProps) {
  return (
    <Container htmlFor={htmlFor}>
      <Label>{text}</Label>
      <Input {...register(htmlFor, validations)} {...props} />
      {!!error && <Error>{error.message}</Error>}
    </Container>
  )
}
