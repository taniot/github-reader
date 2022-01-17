import React, { useState, useMemo } from 'react';
//components
import Results from '../results/results.components';
import Search from '../search/search.component';
//contexts
import SearchContext from '../../contexts/search.context';
//styles
import './repositories.styles.scss';
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
