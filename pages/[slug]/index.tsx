import { getMovie } from '../../services';
import MovieDetail from '../../components/MovieDetail';
import ContentSection from '../../components/ContentSection';

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
        <ContentSection>
          <p>😐 Movie not found</p>
        </ContentSection>
      )}
    </>
  );
}
