import { ReactNode } from 'react'

import { SideBarNavProvider } from './sideBarNavContext'

interface AppProviderProps {
  children: ReactNode
}

function AppProvider({ children }: AppProviderProps) {
  return <SideBarNavProvider>{children}</SideBarNavProvider>
}

export default AppProvider
