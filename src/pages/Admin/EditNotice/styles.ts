import styled from 'styled-components'
import { Button } from '../../../components'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

export const Container = styled.div`
  display: flex;
  min-width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  form {
    background-color: #646464;
    border-radius: 10px;
    padding: 40px;
    display: flex;
    width: 70%;
    flex-direction: column;
    gap: 25px;
  }
  textarea {
    min-width: 100%;
    min-height: 100px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    outline: none;
    border: none;
    justify-content: center;
    align-items: center;
  }
`
export const Label = styled.p`
  font-size: 15px;
  color: #fff;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding-left: 10px;
  outline: none;
  border: none;
`

export const ButtonStyle = styled(Button)`
  width: 100%;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 25px;
  background-color: #2779f5;
`
export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  border: 1px #ffff dashed;
  border-radius: 5px;
  padding: 15px;
  gap: 5px;
  align-items: center;
  color: white;

  input {
    width: 1px;
    opacity: 0;
  }
`

export const CloudUploadIconStyle = styled(CloudUploadIcon)`
  color: white;
`
