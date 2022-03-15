import { getMovie } from '../../services';
import MovieDetail from '../../components/MovieDetail';

export async function getServerSideProps({ query }) {
  const { slug } = query;
  const movie = await getMovie(slug);
  return {
    props: { movie: movie || {} },
  };
}

export default function Movie({ movie }) {
  return (
    <>
      {movie['Response'] === 'True' ? (
        <MovieDetail movie={movie}></MovieDetail>
      ) : (
        <div>Movie not found</div>
      )}
    </>
  );
}
