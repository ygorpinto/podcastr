import PlayerStyles from "./PlayerStyles"

const Player = () => {
    return (
        <PlayerStyles>
            <header>
                <img src="/playing.svg" alt="tocandoagora"/>
                <strong>Tocando agora</strong>
            </header>
            <div className="emptyPlayer">
                <strong>Selecione um poscast para ouvir.</strong>
            </div>
            <footer className="empty">
                <div className="progress">
                    <span>00:00</span>
                    <div className="slider">
                    <div className="emptySlider"/>
                    </div>
                    <span>00:00</span>
                </div>
                <div className="buttons">
                    <button type="button">
                        <img src="/shuffle.svg" alt="shuffle"/>
                    </button>
                    <button type="button">
                        <img src="/play-previous.svg" alt="prev"/>
                    </button>
                    <button type="button">
                        <img src="/play.svg" alt="play"/>
                    </button>
                    <button type="button">
                        <img src="/play-next.svg" alt="next"/>
                    </button>
                    <button type="button">
                        <img src="/repeat.svg" alt="repeat"/>
                    </button>
                </div>
            </footer>
        </PlayerStyles>
    )
}

export default Player;