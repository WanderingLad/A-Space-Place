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

  type UserAuth {
    token: ID!
    user: User
  }
  
  type ModeratorAuth {
    token: ID!
    moderator: Moderator
  }

  type PostAuth {
    token: ID!
    post: Post
  }

  type Query {
    post(body:String!): [Post]
  }

  type Mutation {
    userLogin(email: String!, password: String!): UserAuth
    moderatorLogin(email: String!, password: String!): ModeratorAuth
    addUser(username: String!, email: String!, password: String!): UserAuth
    addModerator(username: String!, email: String!, password: String!): ModeratorAuth
    addPost(body: String!, content: String!, image: String, link: String): PostAuth
    removePost(_id: ID!): Post
  }
`;

module.exports = typeDefs;
