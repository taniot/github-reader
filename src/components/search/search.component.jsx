import React, { useContext } from 'react';
//contexts
import SearchContext from '../../contexts/search.context';
//styles
import './search.styles.scss';
const Search = () => {
  const { query, handleSearch } = useContext(SearchContext);

  return (
    <div className='search'>
      <div className='input-search'>
        <input
          name='query'
          placeholder='Find a repository...'
          type='text'
          value={query}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default Search;
