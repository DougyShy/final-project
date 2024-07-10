const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    cart: [ID]!
  }

  type Book {
    _id: ID
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
    booksById: [Book]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBookToCart(username: String!, bookID: ID!): Book
  }
`;

module.exports = typeDefs;
