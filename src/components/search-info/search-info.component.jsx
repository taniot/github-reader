import React, { useContext } from 'react';
import { XCircleFillIcon } from '@primer/octicons-react';
//contexts
import SearchContext from '../../contexts/search.context';
//styles
import './search-info.styles.scss';
const SearchInfo = ({ data }) => {
  const { query, setQuery } = useContext(SearchContext);
  const { repositoryCount } = data.search;
  return (
    <>
      {query !== '' && (
        <div className='search-info'>
          <div className='info-results'>
            <strong>{repositoryCount}</strong>
            {repositoryCount > 1 ? ` results ` : ` result`} for repositories
            matching <strong>{query}</strong>
          </div>
          <div className='query-reset'>
            <button onClick={() => setQuery('')}>
              <XCircleFillIcon size={16} />
              <span>Clear filter</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchInfo;
