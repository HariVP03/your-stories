import { useLazyQuery, useQuery } from "@apollo/client";
import { chakra, Flex, Spinner } from "@chakra-ui/react";
import { Navbar, StoryBody } from "@components";
import { GET_STORY_BY_ID } from "@queries";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Story: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    // const [getStoryById, { called, loading }] = useLazyQuery(GET_STORY_BY_ID, {
    //     variables: {
    //         getStoryId: id,
    //     },
    //     onError: (e) => {
    //         console.log(e);
    //     },
    // });
    const [story, setStory] = useState<any>();
    const { loading } = useQuery(GET_STORY_BY_ID, {
        variables: {
            getStoryId: id,
        },
        onCompleted: (e) => {
            setStory(e?.getStory);
        },
    });

    return (
        <>
            <Head>
                <title>Your Stories | {story?.title || "Loading..."}</title>
            </Head>
            <chakra.main>
                <Navbar />
                {!loading ? (
                    <StoryBody
                        authorAvatar={story?.author.avatar}
                        authorName={story?.author.name}
                        body={story?.body}
                        title={story?.title}
                        topic={story?.topic}
                        key={story?.id}
                    />
                ) : (
                    <Flex mt={5} w="full" justify="center">
                        <Spinner />
                    </Flex>
                )}
            </chakra.main>
        </>
    );
};

export default Story;
