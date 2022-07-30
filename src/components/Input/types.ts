export interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  required?: boolean
  register?: any
  htmlFor?: string
  text: string
  onChange?: (e: any) => void
  onInput?: (event: any) => void
  validations?: any
  onBlur?: any
  error?: any
}
