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
    playList: (list,index) => void;
    playNext:() => void;
    playPrevious:() => void;
    hasPrevious:boolean;
    hasNext:boolean
}

export const PlayerContext = createContext({} as PlayerContextData);

const PlayerProvider = ({children}) => {

    const [episodeList, setEpisodeList] = useState([]);
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    function play (episode:Episode) {
        setEpisodeList([episode]);
        setCurrentEpisodeIndex(0);
        setIsPlaying(true);
    }

    function playList (list: Episode[], index:number) {
        setEpisodeList(list);
        setCurrentEpisodeIndex(index);
        setIsPlaying(true);
    }

    function togglePlay () {
        setIsPlaying(!isPlaying);
    }

    function setPlayingState (state:boolean) {
        setIsPlaying(state);
    }

    const hasPrevious = currentEpisodeIndex > 0;
    const nextEpisodeIndex = (currentEpisodeIndex + 1);
    const hasNext = nextEpisodeIndex < episodeList.length

    function playNext () {
        if (hasNext) {
            setCurrentEpisodeIndex(currentEpisodeIndex+1);
        }
    }

    function playPrevious () {
        if (hasPrevious) {
            setCurrentEpisodeIndex(currentEpisodeIndex-1);
        }
    }

    return (
        <PlayerContext.Provider
        value={{
            episodeList,
            currentEpisodeIndex,
            play,
            isPlaying,
            togglePlay,
            setPlayingState,
            playList,
            playNext,
            playPrevious,
            hasNext,
            hasPrevious
        }}
        >
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerProvider;