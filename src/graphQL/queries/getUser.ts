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
