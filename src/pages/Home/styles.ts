import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
`

export const CategoriesMenu = styled.article`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5vw;
  margin-top: 5vh;
`

export const CategoryButton = styled.button<{ isActiveBrand: boolean }>`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${(props) => props.isActiveBrand && '2px solid #2779f5'};
  color: ${(props) => (props.isActiveBrand ? '#2779f5' : '#000')};
  font-size: 1.2rem;
`

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5vw;
  padding: 3vw;
`
