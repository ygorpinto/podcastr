import Header from "../components/Header/Header"
import Player from "../components/Player/Player"
import PlayerProvider from "../contexts/PlayerContext"
import GlobalStyles from "../styles/global"
import Wrapper from "../styles/wrapper"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <PlayerProvider>
      <GlobalStyles />
      <Wrapper>
        <div className="main">
          <Header />
          <Component {...pageProps} />
        </div>
          <Player />
      </Wrapper>
      </PlayerProvider>
    </>
  )
}

export default MyApp
