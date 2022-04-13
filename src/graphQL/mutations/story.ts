import { gql } from "@apollo/client";

export const ADD_STORY = gql`
    mutation Mutation($data: addStoryInput) {
        addStory(data: $data) {
            title
            date
            body
            thumbnail
            topic
            authorId
        }
    }
`;
