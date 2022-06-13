import { gql } from '@apollo/client';

export const POST = gql`
    query post ($_id: ID!) {
        post (_id: $_id) {    
            _id
            user
            body
            title
            link
            content
            approved
        }
    }`;

export const POSTS = gql`
    query posts ($body: String!) {
        posts (body: $body) {    
            _id
            user
            body
            title
            link
            content
            approved
        }
    }`;

export const USER_POST = gql`
    query userPost ($user: String!) {
        userPost (user: $user) {    
            _id
            user
            body
            link
            content
            approved
        }
    }`;

export const APPROVE_POST = gql`
    query approvePost ($approved: Boolean!) {
        approvePost (approved: $approved) {    
            _id
            user
            body
            link
            content
            approved
        }
    }`;

export const USER = gql`
    query user ($email: String!) {
        user (email: $email) {    
            _id
            username
            email
        }
    }`;

export const USERS = gql`
        query users {
            users {    
                _id
                username
                email
            }
        }`;

export const MODERATOR = gql`
    query moderator ($email: String!) {
        moderator (email: $email) {    
            username
        }
    }`;

export const BODY = gql`
    query body ($id: Int!) {
        body (id: $id) {    
            id
            name
            image
            type
            age
            dist
            year
            sake
            temp
        }
    }`;