const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    cart: [Book]!
  }

  type Book {
    _id: ID!
    title: String
    author: String
    genre: String
    year: Int
    img_URL: String
    rating: Int
    price: Float
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
