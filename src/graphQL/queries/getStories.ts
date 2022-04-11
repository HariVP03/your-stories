import { gql } from "@apollo/client";

export const GET_STORIES = gql`
    query GetStories($limit: Int, $offset: Int) {
        getStories(limit: $limit, offset: $offset) {
            id
            title
            date
            body
            author {
                name
                avatar
            }
            thumbnail
            topic
        }
    }
`;
