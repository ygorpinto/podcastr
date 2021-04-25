import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";
import PlayerStyles from "./PlayerStyles"
import Slider from 'rc-slider'

import 'rc-slider/assets/index.css'
import { convertDurationToTimeString } from "../../utils/convertDutationToTimeString";

const Player = () => {

    const audioRef = useRef<HTMLAudioElement>(null);
    const [progress, setProgress] = useState(0);

    const {
        episodeList,
        currentEpisodeIndex,
        isPlaying,
        togglePlay,
        setPlayingState,
        playNext,
        playPrevious,
        hasNext,
        hasPrevious,
        isLooping,
        toggleLoop,
        toggleShuffle,
        isShuffling,
        clearPlayerState
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

    function setUpProgressListener () {
        audioRef.current.currentTime = 0;
        audioRef.current.addEventListener('timeupdate', e => {
            setProgress(Math.floor(audioRef.current.currentTime));
        })
    }

    function handleSeek (amount) {
        audioRef.current.currentTime = amount
        setProgress(amount);
    }

    function handleEpisodeEnded () {
        if (hasNext) {
            playNext()
        } else {
            clearPlayerState()
        }
    }

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
                    <span>{convertDurationToTimeString(progress)}</span>
                    <div className="slider">
                        {episode ? (
                            <Slider
                            trackStyle={{backgroundColor:"#04d361"}}
                            railStyle={{backgroundColor:"#9f75ff"}}
                            handleStyle={{borderColor:"#04d361", borderWidth:4}}
                            max={Number(episode?.duration)}
                            value={progress}
                            onChange={handleSeek}
                            />
                        ) : (
                            <div className="emptySlider"/>
                        )}
                    </div>
                    <span>{convertDurationToTimeString(Number(episode?.duration ?? 0))}</span>
                </div>
                {episode && (
                <audio
                src={episode.url}
                autoPlay
                ref={audioRef}
                loop={isLooping}
                onPlay={()=>setPlayingState(true)}
                onPause={()=>setPlayingState(false)}
                onLoadedMetadata={setUpProgressListener}
                onEnded={handleEpisodeEnded}
                />
                )}
                <div className="buttons">
                    <button 
                    disabled={!episode || episodeList.length===1}
                    onClick={toggleShuffle}
                    className={isShuffling ? "isActive" : ""}
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
                    className={isLooping ? "isActive" : ""} 
                    disabled={!episode}
                    onClick={toggleLoop}
                    type="button">
                        <img src="/repeat.svg" alt="repeat"/>
                    </button>
                </div>
            </footer>
        </PlayerStyles>
    )
}

export default Player;