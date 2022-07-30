import styled from 'styled-components'

export const ComponentButton = styled.button`
  min-width: 18vh;
  height: 5vh;
  background-color: #2779f5;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: #eeeeee;

  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.8;
  }
`
