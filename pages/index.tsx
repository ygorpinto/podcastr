export default function Home({episodes}) {
  return (
    <>
    <h1>Episodes</h1>
    {JSON.stringify(episodes)}
    </>
  )
}

export async function getStaticProps () {
  const res = await fetch ("http://localhost:3333/episodes");
  const data = await res.json();

  return {
    props: {
      episodes:data
    },
    revalidate: 60 * 60 * 4
  }
}