import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import SearchContext from '../../contexts/search.context';
import UserContext from '../../contexts/user.context';

import SEARCH_DEFAULT from '../../graphql/queries/search-default.query';

import './results.styles.scss';
import Repository from '../repository/repository.component';

const Results = () => {
  const { query, defaultQuery, setQuery } = useContext(SearchContext);
  const user = useContext(UserContext);

  const searchQuery = [query, `user:${user}`, defaultQuery].join(' ');
  const { loading, error, data } = useQuery(SEARCH_DEFAULT, {
    variables: { query: searchQuery },
  });

  if (loading) {
    console.log({ loading });
    return <p>Loading...</p>;
  }

  if (error) {
    console.log({ error });
    return <p>error...</p>;
  }
  if (data) {
    console.log({ data });
  }

  return (
    <div className='results'>
      <div className='info-search'>
        <div className='info-results'></div>
        <div className='query-reset'>
          <button onClick={() => setQuery('')}>Reset</button>
        </div>
      </div>
      {data.search.edges.map(({ node }) => (
        <Repository key={node.id} {...node} />
      ))}
    </div>
  );
};

export default Results;
