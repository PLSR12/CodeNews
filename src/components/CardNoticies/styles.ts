import styled from 'styled-components'

export const ContainerCard = styled.div`
  display: flex;
  width: 80vw;
  height: 30vh;
  flex-flow: row wrap;
  border: 2px solid #e8e8e8;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 30%);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  @media (max-width: 1024px) {
    width: 80vw;
    height: fit-content;
  }
`
export const ContainerImage = styled.div`
  display: flex;
  width: max-content;
  height: max-content;
  img {
    width: 20vw;
    height: 14vw;
    min-height: max-content;
    border-radius: 5px;
    padding: 5px 5px 10px 5px;

    @media (max-width: 1024px) {
      min-width: 77vw;
      align-items: center;
      justify-content: center;
      min-height: 35vw;
      padding: 5px 5px 5px 15px;
    }
  }
`
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  padding: 10px 0 0 15px;

  hr {
    margin-top: 5px;
  }

  @media (max-width: 1024px) {
    padding: 10px 0 0 10px;
    height: 100%;
    width: 100%;
  }
`

export const NewsTitle = styled.p`
  flex-wrap: wrap;
  font-size: 1.8rem;
  font-weight: 800;
  color: #000000;
  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }
`

export const NewsPreview = styled.p`
  margin-top: 20px;
  flex-wrap: wrap;
  font-size: 1.3rem;
  color: #343434;
  @media (max-width: 1024px) {
    font-size: 1rem;
    margin-top: 2px;
    margin-bottom: 20px;
  }
`
