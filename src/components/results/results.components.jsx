import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

//contexts
import SearchContext from '../../contexts/search.context';
import UserContext from '../../contexts/user.context';

//query
import SEARCH_DEFAULT from '../../graphql/queries/search-default.query';

//components
import Repository from '../repository/repository.component';
import SearchInfo from '../search-info/search-info.component';
import SearchLoader from '../search-loader/search-loader.component';
import ErrorMessage from '../error/error.components';

//styles
import './results.styles.scss';

const Results = () => {
  const { query, defaultQuery } = useContext(SearchContext);
  const { login } = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState(defaultQuery);

  useEffect(() => {
    setSearchQuery(`${query} ${defaultQuery}`);
  }, [query, login, defaultQuery]);

  const { loading, error, data } = useQuery(SEARCH_DEFAULT, {
    variables: { query: `user:${login} ${searchQuery}` },
  });

  if (loading) {
    return <SearchLoader />;
  }

  if (error) {
    return <ErrorMessage>Error: {error.message}</ErrorMessage>;
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
          <p>{login} doesn’t have any repositories that match.</p>
        </div>
      )}
    </div>
  );
};

export default Results;
