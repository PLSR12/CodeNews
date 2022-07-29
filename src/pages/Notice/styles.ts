import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
`

export const ContentNotices = styled.article`
  width: 60%;
  min-height: 100vh;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  margin-left: 20%;
  padding: 20px;

  @media (max-width: 1024px) {
    padding-top: 20px;
    width: 90%;
    margin-left: 5%;
  }

  .lineDate {
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
`

export const NewsTitle = styled.p`
  flex-wrap: wrap;
  font-size: 1.8rem;
  font-weight: 800;
  color: #000000;
`

export const DateNews = styled.p`
  flex-wrap: wrap;
  font-size: 1.3rem;
  color: #343434;
`

export const NewsPreview = styled.p`
  margin-top: 20px;
  flex-wrap: wrap;
  font-size: 1.3rem;
  color: #343434;
`

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;

  img {
    width: 70vw;
    height: 28vw;
    min-height: max-content;

    @media (max-width: 1024px) {
      min-width: 85vw;
      min-height: 55vw;
      padding: 5px 5px 5px 5px;
    }
  }
`
export const NewsContent = styled.p`
  flex-wrap: wrap;
  font-size: 1.3rem;
  color: #000000;
  margin-top: 30px;
  text-align: justify;
`
