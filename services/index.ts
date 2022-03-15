const API_URL = `http://www.omdbapi.com/?apikey=ff896537&`;

export const searchMovies = async ({ query, type, minYear, maxYear }, page: number = 1) => {
  try {
    const searchParams = new URLSearchParams({ s: query.trim(), type, page: `${page}` });
    const res = await fetch(API_URL + searchParams);
    const { Search = [], totalResults = '0' } = await res.json();
    return {
      items: Search,
      total: totalResults,
    };
  } catch (error) {
    console.error(error);
    alert('Something went wrong :(');
  }
};

export const getMovie = async (id) => {
  try {
    const searchParams = new URLSearchParams({ i: id });
    const res = await fetch(API_URL + searchParams);
    return await res.json();
  } catch (error) {
    console.error(error);
    alert('Something went wrong :(');
  }
};
