import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import api from '../../services/api'
import formatDate from '../../utils/formatDate'

import {
  Container,
  ContentNotices,
  NewsTitle,
  NewsPreview,
  ContainerImage,
  DateNews,
  NewsContent,
} from './styles'

export function Notice() {
  const [notice, setNotice] = useState<any>([])
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    async function loadNotice() {
      const splitedId = id.split(':')[1]

      const response = await api.get(`/notice/${splitedId}`)

      setNotice(response.data)
    }
    loadNotice()
  }, [id])

  return (
    <>
      <Container>
        <ContentNotices>
          <NewsTitle> {notice.title}</NewsTitle>
          <NewsPreview>{notice.preview}</NewsPreview>
          <div className="lineDate">
            <DateNews> Criado em {formatDate(notice.updatedAt)}</DateNews>
          </div>
          <ContainerImage>
            <img src={notice.url} alt="imagem da notícia"></img>
          </ContainerImage>
          <NewsContent>{notice.content}</NewsContent>
        </ContentNotices>
      </Container>
    </>
  )
}
