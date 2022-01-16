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
            shortDescriptionHTML
            updatedAt
            url
            viewerHasStarred
            visibility
            isPrivate
            repositoryTopics(first: 10) {
              totalCount
              nodes {
                url
                topic {
                  id
                  name
                }
              }
            }

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
