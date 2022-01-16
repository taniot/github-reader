import React, { useContext } from 'react';
import { SearchContext } from '../repositories/repositories.component';

import './search.styles.scss';

const Search = () => {
  const { query, debounceSearch } = useContext(SearchContext);

  return (
    <div className='search'>
      <input
        name='search'
        className='form-control'
        placeholder='Find a repository...'
        type='text'
        onChange={debounceSearch}
      />
    </div>
  );
};

export default Search;
