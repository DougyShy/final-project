const typeDefs = `
  type User {
    _id: ID!
    email: String!
  }

  type Book {
    _id: ID!
    title: String!
    author: String!
  }

  type Query {
    user: [User]
    book: [Book]
  }
`
  /*type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`;*/

module.exports = typeDefs;
