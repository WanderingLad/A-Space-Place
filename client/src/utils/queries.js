import { gql } from '@apollo/client';

export const POST = gql`
    {
        post{
            body
            content
            image
            link
        }
    }
`;