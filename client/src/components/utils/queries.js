import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      cart
    }
  },
`;

export const QUERY_USERS = gql`
  query getUsers {
    users {
      _id
      username
      email
      cart
    }
  },
`;

export const QUERY_BOOK = gql`
  query book($id: ID!) {
    book(_id: $id) {
      _id
      title
      author
      genre
      year
      img_URL
      rating
      price
    }
  },
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

export const QUERY_BOOKS_BY_IDS = gql`
  query getBooksByID($ids: [ID!]!) {
    getBooksByIds(ids: $ids) {
      _id
      title
      author
      price
    }
  }
`;


