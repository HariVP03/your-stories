import { gql } from "@apollo/client";

export const CREATE_USER = gql`
    mutation Mutation($data: createUserInput) {
        createUser(data: $data) {
            name
            email
            aboutMe
            avatar
            status
            workAt
            basedIn
            id
        }
    }
`;
