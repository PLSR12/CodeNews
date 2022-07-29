import React from 'react'
import PropTypes from 'prop-types'

import { Container, ContainerItems } from './styles'

import ListNotices from './ListNotices'
import NewNotice from './NewNotice'
import EditNotice from './EditNotice'
import NewCategory from './NewCategory'

import { SideMenuAdmin } from '../../components'
import paths from '../../config/paths'

export function Admin({ match: { path } }: any) {
  return (
    <Container>
      <SideMenuAdmin />
      <ContainerItems>
        {path === paths.Notices && <ListNotices />}
        {path === paths.NewNotice && <NewNotice />}
        {path === paths.EditNotice && <EditNotice />}
        {path === paths.NewCategory && <NewCategory />}
      </ContainerItems>
    </Container>
  )
}
