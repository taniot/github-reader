import React, { useState, useMemo, createContext } from 'react';
import debounce from 'lodash.debounce';
import './repositories.styles.scss';

import Search from '../search/search.component';

export const SearchContext = createContext('');

const Repositories = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const debounceSearch = useMemo(() => debounce(handleSearch, 500), []);

  const value = useMemo(
    () => ({ query, debounceSearch }),
    [query, debounceSearch]
  );

  return (
    <section className='repositories-container'>
      <SearchContext.Provider value={value}>
        <Search />
        <div>Results</div>
      </SearchContext.Provider>
    </section>
  );
};

export default Repositories;
