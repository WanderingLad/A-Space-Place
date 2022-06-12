import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation userLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      token
    }
  }
`;

export const LOGIN_MODERATOR = gql`
  mutation moderatorLogin($email: String!, $password: String!) {
    moderatorLogin(email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($user: String$body: String!, $title: String!, $content: String!, $link: String!) {
    addPost(user: $user, body: $body, title: $title, content: $content, link: $link) {
      token
      post {
        user
        body
        content
      }
    }
  }
`;

export const REMOVE_POST = gql`
  mutation removePost($_id: ID!) {
    removePost(_id: $_id) {
        _id
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser($_id: ID!) {
    removeUser(_id: $_id) {
        _id
    }
  }
`;

export const APPROVE_POSTS = gql`
  mutation approvePosts($_id: ID!) {
    approvePosts(_id: $_id) {
        _id
    }
  }
`;