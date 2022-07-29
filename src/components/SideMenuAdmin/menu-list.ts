import paths from '../../config/paths'

import { IconDashboard, IconSettings } from '../Icons'

import FastfoodIcon from '@mui/icons-material/Fastfood'

export const navBar = {
  coloring: 'pp',
  menu: [
    {
      icon: FastfoodIcon,
      pathname: 'admin-noticias',
      label: 'Listar Noticias',
      link: paths.Notices,
    },
    {
      icon: IconDashboard,
      pathname: 'nova-noticia',
      label: 'Nova Noticia',
      link: paths.NewNotice,
    },
    {
      icon: IconSettings,
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
