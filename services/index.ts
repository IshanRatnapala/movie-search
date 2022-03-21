import { WatchList, WatchListItem } from '../types';

const API_URL = `http://www.omdbapi.com/?apikey=ff896537&`;

export const searchMovies = async ({ query, type, minYear, maxYear }, page: number = 1) => {
  try {
    const searchParams = new URLSearchParams({ s: query.trim(), type, page: `${page}` });
    const res = await fetch(API_URL + searchParams);
    const { Search = [], totalResults = '0' } = await res.json();

    const filteredResults = Search.filter((movie) => {
      const [startYear, endYear] = movie['Year'].split('–');
      let inRange = true;
      if (endYear) {
        if (endYear > maxYear) {
          inRange = false;
        }
      } else {
        if (startYear > maxYear) {
          inRange = false;
        }
      }
      if (startYear && startYear < minYear) {
        inRange = false;
      }
      return inRange;
    });

    return {
      items: filteredResults,
      total: totalResults,
    };
  } catch (error) {
    alert('Something went wrong with the search :(');
    console.error(error);
    return {};
  }
};

export const getMovie = async (id) => {
  try {
    const searchParams = new URLSearchParams({ i: id });
    const res = await fetch(API_URL + searchParams);
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

export const getWatchList = () => {
  const watchList: WatchList = JSON.parse(localStorage.getItem('watch-list') || '{}');
  return watchList;
};

export const addToWatchList = (movieId: string, data: WatchListItem) => {
  const watchList: WatchList = getWatchList();
  watchList[movieId] = data;
  localStorage.setItem('watch-list', JSON.stringify(watchList));
};

export const removeFromWatchList = (movieId: string) => {
  const watchList: WatchList = getWatchList();
  delete watchList[movieId];
  localStorage.setItem('watch-list', JSON.stringify(watchList));
};
