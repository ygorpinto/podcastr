import { GetStaticProps } from 'next'
import Image from 'next/image'
import { api } from '../services/api';
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns'
import { convertDurationToTimeString } from '../utils/convertDutationToTimeString';
import HomeStyles from '../styles/home';

type HomeProps = {
  eposides: Array<{
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
  return (
    <HomeStyles>
      <section className="latestEpisodes">
        <h2>Últimos lançamentos</h2>
        <ul>
          {latestEpisodes.map(episode => {
            return (
              <li key={episode.id}>
                <Image
                  width={192}
                  height={192}
                  src={episode.thumbnail}
                  alt={episode.title}
                  objectFit="cover"
                />
                <div className="episodeDetails">
                  <a href="">{episode.title}</a>
                  <p>{episode.members}</p>
                  <span>{episode.publishedAt}</span>
                  <span>{episode.durationAsString}</span>
                </div>
                <button type="button">
                  <img src="play-green.svg" alt="Play" />
                </button>
              </li>
            )
          })}
        </ul>
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
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
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