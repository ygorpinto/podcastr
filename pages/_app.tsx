import Header from "../components/Header/Header"
import Player from "../components/Player/Player"
import GlobalStyles from "../styles/global"
import Wrapper from "../styles/wrapper"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </Wrapper>
    </>
  )
}

export default MyApp
