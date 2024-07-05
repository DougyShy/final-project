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

export const QUERY_BOOKS = gql`
  query getBooks {
    books {
      _id
      title
      author
      genre
      year
      img_URL
      rating
      price
    }
  }
`;




