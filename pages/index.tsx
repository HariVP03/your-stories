import React, { useEffect, useMemo, useState } from "react";
import { chakra, Flex } from "@chakra-ui/react";

import { TextStory, Navbar, ThumbnailStory, UserCard } from "@components";
import Head from "next/head";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_RANDOM_USERS, GET_STORIES } from "@queries";

const Home: React.FC = () => {
    // let randomUsers: any;
    const [randomUsers, setRandomUsers] = useState<any>();
    const [stories, setStories] = useState<any>();
    const [offset, setOffset] = useState(0);

    const [getRandomUsers, { called, loading }] =
        useLazyQuery(GET_RANDOM_USERS);
    const [getStories, { called: calledStories, loading: loadingStories }] =
        useLazyQuery(GET_STORIES, {
            variables: {
                limit: 9,
                offset,
            },
        });

    useEffect(() => {
        getRandomUsers().then((e: any) => {
            setRandomUsers(e.data.getRandomUsers);
        });
        getStories().then((e: any) => {
            setStories(e.data.getStories);
        });
    }, []);

    useEffect(() => {
        getStories().then((e: any) => {
            setStories(e.data.getStories);
        });
    }, [offset]);

    return (
        <>
            <Head>
                <title>
                    Your Stories | Write your stories for the world to see
                </title>
            </Head>
            <chakra.main>
                <Navbar />
                <Flex
                    flexWrap="wrap"
                    justify="center"
                    gap={12}
                    p={5}
                    w="full"
                    h="fit-content"
                >
                    {!loadingStories && calledStories
                        ? stories?.map((e: any) => <ThumbnailStory {...e} />)
                        : ""}
                </Flex>
                <chakra.h1 w="full" textAlign="center" fontSize="3xl">
                    Meet Some of Our Authors
                </chakra.h1>
                <Flex
                    flexWrap="wrap"
                    justify="center"
                    gap={12}
                    p={5}
                    w="full"
                    h="fit-content"
                >
                    {!loading && called
                        ? randomUsers?.map((e: any) => <UserCard {...e} />)
                        : ""}
                </Flex>
            </chakra.main>
        </>
    );
};

export default Home;
