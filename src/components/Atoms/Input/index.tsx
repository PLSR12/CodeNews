import React from 'react'

import { Container, Error, InputDefault, Label } from './styles'
import { IInputProps } from './types'

export function InputComponent({
  register,
  validations,
  htmlFor,
  text,
  onInput,
  onBlur,
  error,
  ...props
}: IInputProps) {
  return (
    <Container htmlFor={htmlFor}>
      <Label>{text}</Label>
      <InputDefault
        onInput={onInput}
        onBlurCapture={onBlur}
        title={text}
        {...register(htmlFor, validations)}
        {...props}
      />
      {!!error && <Error>{error.message}</Error>}
    </Container>
  )
}
