import { GetStaticProps } from 'next'
import Image from 'next/image'
import { api } from '../services/api';
import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import ptBR from 'date-fns'
import { convertDurationToTimeString } from '../utils/convertDutationToTimeString';
import HomeStyles from '../styles/home';
import { useContext } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';
import { Head } from 'next/document';

type HomeProps = {
  episodes: Array<{
    id: string;
    title: string;
    thumbnail: string;
    members: string;
    duration: number;
    durationAsString: string;
    description: string;
    url: string;
    publishedAt: string;
  }>
}

export default function Home({ latestEpisodes, allEpisodes }) {

  const { playList } = useContext(PlayerContext);

  const episodeList = [...latestEpisodes,...allEpisodes];
  
  return (
    <HomeStyles>
      <section className="latestEpisodes">
        <h2>Últimos lançamentos</h2>
        <ul>
          {latestEpisodes.map((episode, index) => {
            return (
              <li key={episode.id}>
                <Image
                  width={192}
                  height={192}
                  src={episode.thumbnail}
                  alt={episode.title}
                  objectFit="cover"
                />
                <div 
                style={{width:100}}
                className="episodeDetails">
                  <Link href={`/episodes/${episode.id}`}>
                  <a>{episode.title}</a>
                  </Link>
                  <p>{episode.members}</p>
                  <span>{episode.publishedAt}</span>
                  <span>{episode.durationAsString}</span>
                </div>
                <button 
                onClick={()=>playList(episodeList,index)}
                type="button">
                  <img src="/play-green.svg" alt="Play" />
                </button>
              </li>
            )
          })}
        </ul>
      </section>
      <section className="allEpisodes">
          <h2>Todos Episódios</h2>
          <table cellSpacing={0}>
            <thead>
              <tr>
              <th></th>
              <th>Poscast</th>
              <th>Integrantes</th>
              <th>Data</th>
              <th>Duração</th>
              <th></th>
              </tr>
            </thead>
            <tbody>
              {allEpisodes.map((episode,index) => {
                return (
                  <tr key={episode.id}>
                    <td style={{width:100}}>
                    <Image
                    width={120}
                    height={120}
                    src={episode.thumbnail}
                    alt={episode.title}
                    objectFit="cover"
                    />
                    </td>
                    <td>
                      <Link href={`/episodes/${episode.id}`}>
                      <a>{episode.title}</a>
                      </Link>
                    </td>
                    <td>{episode.members}</td>
                    <td style={{width:90}}>{episode.publishedAt}</td>
                    <td>{episode.durationAsString}</td>
                    <td>
                    <button 
                    onClick={()=>playList(episodeList, index + latestEpisodes.length)}
                    type="button">
                      <img src="/play-green.svg" alt="Play" />
                    </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
      </section>
    </HomeStyles>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("episodes", {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  });

  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), "d MMM yy", { locale: ptBR }),
      duration: parseInt(episode.file.duration),
      durationAsString: convertDurationToTimeString(parseInt(episode.file.duration)),
      description: episode.description,
      url: episode.file.url,
    };
  })

  const latestEpisodes = episodes.slice(0, 2);
  const allEpisodes = episodes.slice(2, episodes.length);

  return {
    props: {
      latestEpisodes,
      allEpisodes
    },
    revalidate: 60 * 60 * 4
  }
}