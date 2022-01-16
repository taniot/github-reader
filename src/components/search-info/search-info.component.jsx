import React, { useContext } from 'react';
import SearchContext from '../../contexts/search.context';
const SearchInfo = () => {
  const { query, setQuery } = useContext(SearchContext);
  console.log({ query });
  return (
    <div className='search-info'>
      <div className='info-results'></div>
      <div className='query-reset'>
        <button onClick={() => setQuery('')}>Reset</button>
      </div>
    </div>
  );
};

export default SearchInfo;
