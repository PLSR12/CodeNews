import { Link } from 'react-router-dom'

import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'

import * as S from './styles'

export function Header() {
  return (
    <S.Container>
      <S.ContainerLeft>
        <Link to="/">
          <LibraryBooksIcon style={{ color: 'white' }} />
        </Link>
      </S.ContainerLeft>
    </S.Container>
  )
}
