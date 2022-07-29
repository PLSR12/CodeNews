import { ReactNode } from 'react'
import { ButtonHTMLAttributes } from 'react'

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export default IButtonProps
