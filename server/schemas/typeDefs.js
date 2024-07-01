const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Book {
    _id: ID!
    title: String!
    author: String!
  }

  type Auth {
    token: ID!
    user: User
  } 

  type Query {
    users: [User]
    user(username: String!): User
    books: [Book]
    book(_id: ID!): Book

  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
