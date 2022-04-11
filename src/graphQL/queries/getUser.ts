import { gql } from "@apollo/client";

export const GET_USER_BY_ID = gql`
    query GetUser($getUserId: String) {
        getUser(id: $getUserId) {
            id
            name
            email
        }
    }
`;

export const GET_RANDOM_USERS = gql`
    query Query {
        getRandomUsers {
            id
            name
            avatar
            aboutMe
            status
            workAt
            basedIn
        }
    }
`;
