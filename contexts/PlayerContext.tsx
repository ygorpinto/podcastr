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
}

export const PlayerContext = createContext({} as PlayerContextData);

const PlayerProvider = ({children}) => {

    const [episodeList, setEpisodeList] = useState([]);
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);

    function play (episode) {
        setEpisodeList([episode]);
        setCurrentEpisodeIndex(0);
    }


    return (
        <PlayerContext.Provider
        value={{
            episodeList,
            currentEpisodeIndex,
            play
        }}
        >
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerProvider;