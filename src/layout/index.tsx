import { ReactNode } from 'react'

import { Header } from '../components'

import { Body, Container, ContainerPage } from './styles'

export default function Layout({ children }: { children: any }) {
  return (
    <Container>
      <ContainerPage>
        <Header />
        <Body>{children}</Body>
      </ContainerPage>
    </Container>
  )
}
