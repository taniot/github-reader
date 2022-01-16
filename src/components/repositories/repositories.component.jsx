import React, { useState, useMemo } from 'react';

import './repositories.styles.scss';

import Search from '../search/search.component';
import Results from '../results/results.components';

import SearchContext from '../../contexts/search.context';

const Repositories = () => {
  const [query, setQuery] = useState('');
  const [defaultQuery] = useState('in:name,description fork:true');

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

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
