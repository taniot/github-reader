import React, { useState, useMemo, createContext } from 'react';
//import debounce from 'lodash.debounce';
import './repositories.styles.scss';

import Search from '../search/search.component';
import Results from '../results/results.components';

export const SearchContext = createContext('');

const Repositories = () => {
  const [query, setQuery] = useState('');
  const [defaultQuery] = useState('in:name,description fork:true');

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  //const debounceSearch = useMemo(() => debounce(handleSearch, 500), []);

  const value = useMemo(
    () => ({ query, setQuery, defaultQuery, handleSearch }),
    [query, defaultQuery]
  );

  return (
    <section className='repositories-container'>
      <SearchContext.Provider value={value}>
        <Search />
        <Results />
      </SearchContext.Provider>
    </section>
  );
};

export default Repositories;
