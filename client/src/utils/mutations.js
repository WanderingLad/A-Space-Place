import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation userLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_MODERATOR = gql`
  mutation moderatorLogin($email: String!, $password: String!) {
    moderatorLogin(email: $email, password: $password) {
      token
      moderator {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        username
        _id
        email
      }
    }
  }
`;

export const ADD_MODERATOR = gql`
  mutation addModerator($username: String!, $password: String!, $email: String!) {
    addModerator(username: $username, password: $password, email: $email) {
      token
      moderator {
        username
        _id
        email
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($body: String!, $content: String!, $image: String, $link: String) {
    addPost(body: $body, content: $content, image: $image, link: $link) {
      token
      post {
        body
        content
      }
    }
  }
`;

export const REMOVE_POST = gql`
  mutation removePost($_id: ID!) {
    removePost(_id: $_id) {
        post {
            body
            content
        }
    }
  }
`;