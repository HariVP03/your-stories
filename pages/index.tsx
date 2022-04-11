import React, { useEffect, useMemo, useState } from "react";
import { chakra, Flex, Spinner } from "@chakra-ui/react";

import { Navbar, ThumbnailStory, UserCard } from "@components";
import Head from "next/head";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_RANDOM_USERS, GET_STORIES } from "@queries";

const Home: React.FC = () => {
    // let randomUsers: any;

    const [randomUsers, setRandomUsers] = useState<any>();
    const [stories, setStories] = useState<any>();
    const [offset, setOffset] = useState(0);

    const { loading } = useQuery(GET_RANDOM_USERS, {
        onCompleted: (e) => {
            setRandomUsers(e.getRandomUsers);
        },
    });
    const { loading: loadingStories } = useQuery(GET_STORIES, {
        variables: {
            limit: 9,
            offset,
        },
        onCompleted: (e) => {
            setStories(e.getStories);
        },
    });

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
                    {!loadingStories ? (
                        stories?.map((e: any) => (
                            <ThumbnailStory {...e} key={e.id} />
                        ))
                    ) : (
                        <Flex w="full" justify="center" h="fit-content">
                            <Spinner />
                        </Flex>
                    )}
                </Flex>
                <chakra.h1 w="full" textAlign="center" fontSize="3xl">
                    {!loading && !loadingStories
                        ? "Meet Some of Our Authors"
                        : ""}
                </chakra.h1>
                <Flex
                    flexWrap="wrap"
                    justify="center"
                    gap={12}
                    p={5}
                    w="full"
                    h="fit-content"
                >
                    {!loading
                        ? randomUsers?.map((e: any) => <UserCard {...e} />)
                        : ""}
                </Flex>
            </chakra.main>
        </>
    );
};

export default Home;
