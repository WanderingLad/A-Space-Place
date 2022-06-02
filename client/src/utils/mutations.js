import { gql } from '@apollo/client';

export const CREATEUSER = gql`
    mutation createUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
            token
        }
    }
`;

export const LOGIN = gql`
    mutation login($email: String!, $password: password) {
        login(email: $email, password: $password) {
            token
            user{
                username
                _id
                email
            }
        }
    }
`;

export const SAVEBOOK = gql`
    mutation saveBook($bookID: String!) {
        saveBook(bookId: $bookID) {
            _id
            savedBooks {
                bookId
            }
        }
    }
`;

export const DELETEBOOK = gql`
    mutation deleteBook($bookID: String!) {
        deleteBook(bookid: $bookID) {
            _id
            savedBooks {
                bookId
            }
        }
    }
`;