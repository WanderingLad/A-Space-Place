const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Moderator {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Post {
    _id: ID!
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
