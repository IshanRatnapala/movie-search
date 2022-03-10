import React, { useEffect, useState } from 'react';
import MultiRangeSlider from './MultiRangeSlider';
import useInput from './../hooks/useInput';

function SearchBar({ handleSearch }) {
  const [query, bindQuery] = useInput('');
  const [type, bindType] = useInput('ANY');
  const [minYear, setMinYear] = useState(1975);
  const [maxYear, setMaxYear] = useState(2022);

  useEffect(() => {
    handleSearch({ query, type, minYear, maxYear });
  }, [query, type, minYear, maxYear]);

  return (
    <section>
      <label>
        Search
        <input type="text" name="query" {...bindQuery} />
      </label>
      <label>
        year
        <MultiRangeSlider
          min={1975}
          max={2022}
          onChange={({ min, max }) => {
            setMinYear(min);
            setMaxYear(max);
          }}
        />
      </label>

      <div {...bindType}>
        type
        <label>
          <input type="radio" value="ANY" name="type" defaultChecked />
          <span>Any</span>
        </label>
        <label>
          <input type="radio" value="MOVIES" name="type" />
          <span>Movies</span>
        </label>
        <label>
          <input type="radio" value="SERIES" name="type" />
          <span>Series</span>
        </label>
        <label>
          <input type="radio" value="EPISODES" name="type" />
          <span>Episodes</span>
        </label>
      </div>
    </section>
  );
}

export default SearchBar;
