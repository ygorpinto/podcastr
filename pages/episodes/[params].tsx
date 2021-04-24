import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router'
import { api } from '../../services/api';
import { convertDurationToTimeString } from '../../utils/convertDutationToTimeString';

const Episode = ({ episode }) => {
    const router = useRouter();
return (
    <h1>{router.query.params}</h1>
)
}

export default Episode;

export const getStaticPaths = async () => {
    return {
        paths:[],
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