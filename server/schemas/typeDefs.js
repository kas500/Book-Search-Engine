const typeDefs = `#graphql
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [String]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    savedBooks: [Book]!
    book(bookId: ID!): Book
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;