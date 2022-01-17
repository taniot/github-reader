import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import SearchContext from '../../contexts/search.context';
import UserContext from '../../contexts/user.context';

import SEARCH_DEFAULT from '../../graphql/queries/search-default.query';

import './results.styles.scss';
import Repository from '../repository/repository.component';
import SearchInfo from '../search-info/search-info.component';
import Loader from '../loader/loader.component';

const Results = () => {
  const { query, defaultQuery } = useContext(SearchContext);
  const user = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState(defaultQuery);

  useEffect(() => {
    setSearchQuery(`${query} ${defaultQuery}`);
  }, [query, user, defaultQuery]);

  const { loading, error, data } = useQuery(SEARCH_DEFAULT, {
    variables: { query: `user:${user} ${searchQuery}` },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return null;
  }

  return (
    <div className='results'>
      <SearchInfo data={data} />
      {data.search.repositoryCount > 0 ? (
        data.search.edges.map(({ node }) => (
          <Repository key={node.id} {...node} />
        ))
      ) : (
        <div className='no-results'>
          <p>{user} doesn’t have any repositories that match.</p>
        </div>
      )}
    </div>
  );
};

export default Results;
