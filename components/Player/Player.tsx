import Image from "next/image";
import { useContext, useEffect, useRef } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";
import PlayerStyles from "./PlayerStyles"
import Slider from 'rc-slider'

import 'rc-slider/assets/index.css'

const Player = () => {

    const audioRef = useRef<HTMLAudioElement>(null);

    const {
        episodeList,
        currentEpisodeIndex,
        isPlaying,
        togglePlay,
        setPlayingState,
        playNext,
        playPrevious,
        hasNext,
        hasPrevious
    } = useContext(PlayerContext);

    useEffect(()=>{
        if (!audioRef.current) {
            return;
        };

        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    },[isPlaying])

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
                        {episode ? (
                            <Slider
                            trackStyle={{backgroundColor:"#04d361"}}
                            railStyle={{backgroundColor:"#9f75ff"}}
                            handleStyle={{borderColor:"#04d361", borderWidth:4}}
                            />
                        ) : (
                            <div className="emptySlider"/>
                        )}
                    </div>
                    <span>00:00</span>
                </div>
                {episode && (
                <audio
                src={episode.url}
                autoPlay
                ref={audioRef}
                onPlay={()=>setPlayingState(true)}
                onPause={()=>setPlayingState(false)}
                />
                )}
                <div className="buttons">
                    <button 
                    disabled={!episode}
                    type="button">
                        <img src="/shuffle.svg" alt="shuffle"/>
                    </button>
                    <button 
                    disabled={!episode || !hasNext}
                    onClick={playNext}
                    type="button">
                        <img src="/play-previous.svg" alt="prev"/>
                    </button>
                    <button 
                    disabled={!episode}
                    onClick={togglePlay}
                    type="button">
                        {isPlaying 
                        ? (<img src="/pause.svg" alt="pause"/>) 
                        : (<img src="/play.svg" alt="play"/>)}
                    </button>
                    <button 
                    disabled={!episode || !hasPrevious}
                    onClick={playPrevious}
                    type="button">
                        <img src="/play-next.svg" alt="next"/>
                    </button>
                    <button 
                    disabled={!episode}
                    type="button">
                        <img src="/repeat.svg" alt="repeat"/>
                    </button>
                </div>
            </footer>
        </PlayerStyles>
    )
}

export default Player;