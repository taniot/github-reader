import { gql } from '@apollo/client';

const QUERY_USER = gql`
  query ($login: String!) {
    user(login: $login) {
      login
      name
      bioHTML
      avatarUrl
      followers {
        totalCount
      }
      following {
        totalCount
      }
      starredRepositories {
        totalCount
      }
      repositories(first: 1) {
        totalCount
      }
    }
  }
`;

export default QUERY_USER;
