import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import SearchContext from '../../contexts/search.context';
import UserContext from '../../contexts/user.context';

import SEARCH_DEFAULT from '../../graphql/queries/search-default.query';

import './results.styles.scss';
import Repository from '../repository/repository.component';
import SearchInfo from '../search-info/search-info.component';

const Results = () => {
  const { query, defaultQuery } = useContext(SearchContext);
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
      <SearchInfo data={data} />
      {data.search.repositoryCount > 0 ? (
        data.search.edges.map(({ node }) => (
          <Repository key={node.id} {...node} />
        ))
      ) : (
        <div class='no-results'>
          <p>{user} doesn’t have any repositories that match.</p>
        </div>
      )}
    </div>
  );
};

export default Results;
