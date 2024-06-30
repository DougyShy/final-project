import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query getUsers {
    users {
      _id
      username
      email
    }
  }
`;


