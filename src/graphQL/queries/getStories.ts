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

export const GET_STORY_BY_ID = gql`
    query GetStory($getStoryId: String) {
        getStory(id: $getStoryId) {
            title
            date
            body
            author {
                name
                avatar
            }
            topic
            thumbnail
        }
    }
`;
