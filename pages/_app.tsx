import Header from "../components/Header/Header"
import Player from "../components/Player/Player"
import GlobalStyles from "../styles/global"
import Wrapper from "../styles/wrapper"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <div className="main">
          <Header />
          <Component {...pageProps} />
        </div>
          <Player />
      </Wrapper>
    </>
  )
}

export default MyApp
