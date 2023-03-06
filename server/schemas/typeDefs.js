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
  input SavedBookInput {
        authors: [String]
        description: String
        bookId: String
        image: String
        forSale: String
        link: String
        title: String
    }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    saveBook(book: SavedBookInput): User
    removeBook(bookId:String!): User
  }
`;

module.exports = typeDefs;