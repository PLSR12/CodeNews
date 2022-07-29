import paths from '../../config/paths'

import { IconDashboard } from '../Icons'

import NewspaperIcon from '@mui/icons-material/Newspaper'
import FiberNewIcon from '@mui/icons-material/FiberNew'

export const navBar = {
  menu: [
    {
      icon: NewspaperIcon,
      pathname: 'admin-noticias',
      label: 'Listar Notícias',
      link: paths.Notices,
    },
    {
      icon: FiberNewIcon,
      pathname: 'nova-noticia',
      label: 'Nova Notícia',
      link: paths.NewNotice,
    },
    {
      icon: IconDashboard,
      pathname: 'nova-categoria',
      label: 'Nova Categoria',
      link: paths.NewCategory,
    },
  ],
}

const listLinks = [
  {
    id: 1,
    label: 'Listar Noticias',
    link: paths.Notices,
  },
  {
    id: 2,
    label: 'Nova Noticia',
    link: paths.NewNotice,
  },
  {
    id: 3,
    label: 'Nova Categoria',
    link: paths.NewCategory,
  },
]

export default listLinks
