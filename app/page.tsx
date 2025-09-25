import TabsComponent from '@/components/Tabs';

async function fetchMovies() {
  const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', {
    next: { revalidate: 86400 },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return data.results;
}

export default async function Home() {
  const movies = await fetchMovies();
  try {
    return (
      <div style={{ fontFamily: 'var(--font-inter)' }}>
        <TabsComponent movies={movies} />
      </div>
    );
  } catch (err) {
    return <p>Error: {(err as Error).message}</p>;
  }
}
