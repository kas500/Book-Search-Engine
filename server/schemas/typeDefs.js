const typeDefs = `#graphql
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [String]
  }

  type Book{
    _id: ID
    authors: [String]
    bookId: String
    forSale: String
    link: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    savedBook(book: SaveBookInput): User
    removeBook(bookId:String!): User
  }
`;

module.exports = typeDefs;