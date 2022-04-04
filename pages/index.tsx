import React from "react";
import { chakra, Flex } from "@chakra-ui/react";

import { TextStory, Navbar, ThumbnailStory, UserCard } from "@components";
import Head from "next/head";

const Home: React.FC = () => {
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
                    <TextStory />
                    <ThumbnailStory />
                    <TextStory />
                </Flex>
                <Flex
                    flexWrap="wrap"
                    justify="center"
                    gap={12}
                    p={5}
                    w="full"
                    h="fit-content"
                >
                    <TextStory />
                    <ThumbnailStory />
                    <TextStory />
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
                    <UserCard />
                    <UserCard />
                    <UserCard />
                </Flex>
            </chakra.main>
        </>
    );
};

export default Home;
