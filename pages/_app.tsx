import Header from "../components/Header/Header"
import Player from "../components/Player/Player"
import GlobalStyles from "../styles/global"

function MyApp({ Component, pageProps }) {
  return (
      <>
        <GlobalStyles/>
        <Header/>
        <Player/>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
