const { gql } = require('@apollo/client');

export const SINGLEUSER = gql`
    {
        _id
        username
        email
        password
        savedBooks {
            title
            bookId
            authors
            description
            image
            link
        }
    }
`;