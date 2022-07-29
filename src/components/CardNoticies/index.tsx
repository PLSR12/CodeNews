import {
  ContainerCard,
  ContainerImage,
  ContainerText,
  NewsTitle,
  NewsPreview,
} from './styles'
import { useHistory } from 'react-router-dom'

export function CardNoticies({ notice }: any) {
  const { push } = useHistory()

  function getNotice() {
    const id = notice.id

    push(`/notice/:${id}`)
  }

  return (
    <ContainerCard onClick={getNotice}>
      <ContainerImage>
        <img src={notice.url} alt="imagem da notícia"></img>
      </ContainerImage>
      <ContainerText>
        <NewsTitle> {notice.title}</NewsTitle>
        <hr className="line"></hr>
        <NewsPreview>{notice.preview}</NewsPreview>
      </ContainerText>
    </ContainerCard>
  )
}
