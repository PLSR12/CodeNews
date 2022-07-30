import Routes from './routes'
import GlobalStyle from './common/styles/global'
import AppProvider from './context'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <AppProvider>
      <Routes />
      <ToastContainer autoClose={2000} theme="colored" />
      <GlobalStyle />
    </AppProvider>
  )
}

export default App
