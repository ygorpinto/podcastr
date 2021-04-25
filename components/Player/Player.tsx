import Image from "next/image";
import { useContext } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";
import PlayerStyles from "./PlayerStyles"

const Player = () => {

    const {episodeList,currentEpisodeIndex} = useContext(PlayerContext);

    const episode = episodeList[currentEpisodeIndex];

    return (
        <PlayerStyles>
            <header>
                <img src="/playing.svg" alt="tocandoagora"/>
                <strong>Tocando agora</strong>
            </header>
            {episode ? (
                <div className="currentEpisode">
                    <Image
                     width={400}
                     height={400}
                     src={episode.thumbnail}
                     objectFit="cover"
                    />
                    <strong>{episode.title}</strong>
                    <span>{episode.members}</span>
                </div>
            ) : (
                <div className="emptyPlayer">
                    <strong>Selecione um poscast para ouvir.</strong>
                </div>
            )}
            
            <footer className={!episode ? "empty" : ""}>
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