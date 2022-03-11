import MovieDetail from '../../components/MovieDetail';

export async function getServerSideProps({ query }) {
  const { slug } = query;

  const mockContent = {
    Title: 'Rogue One: A Star Wars Story',
    Year: '2016',
    Rated: 'PG-13',
    Released: '16 Dec 2016',
    Runtime: '133 min',
    Genre: 'Action, Adventure, Sci-Fi',
    Director: 'Gareth Edwards',
    Writer: 'Chris Weitz, Tony Gilroy, John Knoll',
    Actors: 'Felicity Jones, Diego Luna, Alan Tudyk',
    Plot: "In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire's ultimate weapon of destruction.",
    Language: 'English',
    Country: 'United States',
    Awards: 'Nominated for 2 Oscars. 24 wins & 85 nominations total',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg',
    Ratings: [
      {
        Source: 'Internet Movie Database',
        Value: '7.8/10',
      },
      {
        Source: 'Rotten Tomatoes',
        Value: '84%',
      },
      {
        Source: 'Metacritic',
        Value: '65/100',
      },
    ],
    Metascore: '65',
    imdbRating: '7.8',
    imdbVotes: '597,163',
    imdbID: 'tt3748528',
    Type: 'movie',
    DVD: '04 Apr 2017',
    BoxOffice: '$532,177,324',
    Production: 'N/A',
    Website: 'N/A',
    Response: 'True',
  };
  return {
    props: { movie: mockContent },
  };
}

export default function Movie({ movie }) {
  return <>{movie ? <MovieDetail movie={movie}></MovieDetail> : 'Loading'}</>;
}
