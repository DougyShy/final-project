import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_BOOK_TO_CART = gql`
  mutation addBookToCart($username: String!, $bookID: ID!) {
    addBookToCart(username: $username, bookID: $bookID) {
      _id
      title
    }
  }
`;

export const REMOVE_BOOK_FROM_CART = gql`
  mutation removeBookFromCart($username: String!, $bookID: ID!) {
    removeBookFromCart(username: $username, bookID: $bookID) {
      _id
      title
    }
  }
`;