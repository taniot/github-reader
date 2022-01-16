import React, { useContext } from 'react';
import { SearchContext } from '../repositories/repositories.component';

import './search.styles.scss';

const Search = () => {
  const { query, handleSearch, setQuery } = useContext(SearchContext);

  return (
    <div className='search'>
      <div className='input-search'>
        <input
          name='query'
          className='form-control'
          placeholder='Find a repository...'
          type='text'
          value={query}
          onChange={handleSearch}
        />
      </div>
      <div className='info-search'>
        <div className='info-results'></div>
        <div className='query-reset'>
          <button onClick={() => setQuery('')}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
