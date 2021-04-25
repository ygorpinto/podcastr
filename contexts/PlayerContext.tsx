import { createContext, useState } from "react";

type Episode = {
    title:string;
    members:string;
    thumbnail:string;
    duration:string;
    url:string;
};

type PlayerContextData = {
    episodeList:Episode[];
    currentEpisodeIndex: number;
    play: (Episode) => void;
    isPlaying:boolean;
    togglePlay:() => void;
    setPlayingState: (state) => void;
}

export const PlayerContext = createContext({} as PlayerContextData);

const PlayerProvider = ({children}) => {

    const [episodeList, setEpisodeList] = useState([]);
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    function play (episode) {
        setEpisodeList([episode]);
        setCurrentEpisodeIndex(0);
        setIsPlaying(true);
    }

    function togglePlay () {
        setIsPlaying(!isPlaying);
    }

    function setPlayingState (state:boolean) {
        setIsPlaying(state);
    }

    return (
        <PlayerContext.Provider
        value={{
            episodeList,
            currentEpisodeIndex,
            play,
            isPlaying,
            togglePlay,
            setPlayingState
        }}
        >
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerProvider;