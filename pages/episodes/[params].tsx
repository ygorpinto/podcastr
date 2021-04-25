import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { GetStaticProps } from 'next';
import { api } from '../../services/api';
import EpisodesStyles from '../../styles/episodes';
import Image from 'next/image'
import { convertDurationToTimeString } from '../../utils/convertDutationToTimeString';
import Link from 'next/link';
import { useContext } from 'react';
import { PlayerContext } from '../../contexts/PlayerContext';


const Episode = ({ episode }) => {

    const {
        play
    } = useContext(PlayerContext);

return (
    <EpisodesStyles>
        <div className="thumbnailContainer">
            <Link href="/">
            <button>
                <img src="/arrow-left.svg" alt="Voltar"/>
            </button>
            </Link>
            <Image
            width={700}
            height={140}
            src={episode.thumbnail}
            objectFit="cover"
            />
            <button
            onClick={() => play(episode)}
            >
                <img src="/play.svg" alt="TocarEpisódio"/>
            </button>
        </div>

        <header>
            <h1>{episode.title}</h1>
            <span>{episode.members}</span>
            <span>{episode.publishedAt}</span>
            <span>{episode.durationAsString}</span>
        </header>

        <div className="description" 
        dangerouslySetInnerHTML={{__html:episode.description}}/>
    </EpisodesStyles>
)
}

export default Episode;

export const getStaticPaths = async () => {
    const { data } = await api.get("episodes", {
        params: {
          _limit: 2,
          _sort: 'published_at',
          _order: 'desc'
        }
      });

      const paths = data.map(episode=>{
          return {
            params:{params:episode.id}
          }
      });

    return {
        paths,
        fallback:'blocking'
    }
}

export const getStaticProps : GetStaticProps = async (ctx) => {

    const { params } = ctx.params;
    const { data } = await api.get(`/episodes/${params}`);

    const episode = {
        id: data.id,
        title: data.title,
        thumbnail: data.thumbnail,
        members: data.members,
        publishedAt: format(parseISO(data.published_at), "d MMM yy", { locale: ptBR }),
        duration: Number(data.file.duration),
        durationAsString: convertDurationToTimeString(Number(data.file.duration)),
        description: data.description,
        url: data.file.url,
    };

    return {
        props:{
            episode,
        },
        revalidate: 60* 60* 24
    }
}