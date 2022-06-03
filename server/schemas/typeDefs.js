const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String!
    email: String!
    password: String!
  }

  type Moderator {
    username: String!
    email: String!
    password: String!
  }

  type Post {
    body: String!
    content: String!
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    post: Post
  }

  type Mutation {
    userLogin(email: String!, password: String!): Auth
    moderatorLogin(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addModerator(username: String!, email: String!, password: String!): Auth
    addPost(body: String!, content: String!, image: String, link: String): Post
    removePost(_id: ID!): Post
  }
`;

module.exports = typeDefs;
