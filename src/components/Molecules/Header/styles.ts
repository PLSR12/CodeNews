import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 8vh;
  background-color: #2779f5;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`

export const ContainerLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1vh;

  img {
    display: flex;
    width: 19vh;
  }
`
export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1vh;
`
export const PageLink = styled.a<{ isActive: boolean }>`
  display: inline;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  color: ${(props) => (props.isActive ? 'white' : 'black')};
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
`
export const Line = styled.div`
  height: 4vh;
  border: 0.5px solid white;
`
