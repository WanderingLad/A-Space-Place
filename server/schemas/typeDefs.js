const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
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
    _id: ID!
    user: String!
    body: String!
    title: String!
    content: String!
    approved: Boolean!
    link: String!
  }

  type Body {
    id: Int!
    name: String!
    image: String!
    type: String!
    age: String!
    dist: String!
    year: String!
    sake: String!
    temp: String!
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
    post(_id: ID!): Post
    posts(body: String!): [Post]
    userPost(user: String!): [Post]
    approvePost(approved: Boolean!): [Post]
    user(email: String!): User
    users: [User]
    moderator(email: String!): Moderator
    body(id: Int!): Body
  }

  type Mutation {
    userLogin(email: String!, password: String!): UserAuth
    moderatorLogin(email: String!, password: String!): ModeratorAuth
    addUser(username: String!, email: String!, password: String!): UserAuth
    addPost(user: String, body: String!, title: String, content: String!, link: String!): PostAuth
    removePost(_id: ID!): Post
    removeUser(_id: ID!): User
    approvePosts(_id: ID!): Post
  }
`;

module.exports = typeDefs;
