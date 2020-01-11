import Session from "../components/session"
import Head from "../components/head"

const App = ({ Component, pageProps }) => {
  return (
    <Session>
      <Component {...pageProps} />
    </Session>
  )
}

export default App
