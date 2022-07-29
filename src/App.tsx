import Routes from './routes'
import GlobalStyle from './styles/global'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <Routes />
      <ToastContainer autoClose={2000} theme="colored" />
      <GlobalStyle />
    </>
  )
}

export default App
