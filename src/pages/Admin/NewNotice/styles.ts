import styled from 'styled-components'
import { Button } from '../../../components'

export const Container = styled.div``
export const Label = styled.p`
  font-size: 15px;
  color: #fff;
  margin-bottom: 5px;
`

export const ButtonStyle = styled(Button)`
  width: 100%;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 25px;
  background-color: #2779f5;
`
export const LabelUpload = styled.label`
  margin-top: 35px;
  margin-bottom: 15px;
  cursor: pointer;
  display: flex;
  border: 1px #000 dashed;
  border-radius: 5px;
  padding: 35px;
  gap: 5px;
  align-items: center;
  color: #000;

  input {
    width: 1px;
    opacity: 0;
  }
`
