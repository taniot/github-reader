import { gql } from '@apollo/client';

const SEARCH_DEFAULT = gql`
  query SearchDefault($query: String!) {
    search(type: REPOSITORY, query: $query, first: 10) {
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          ... on Repository {
            id
            name
            description
            updatedAt
            url
            viewerHasStarred
            primaryLanguage {
              name
              color
            }
          }
        }
        textMatches {
          fragment
          highlights {
            text
          }
        }
      }
      repositoryCount
    }
  }
`;

export default SEARCH_DEFAULT;
