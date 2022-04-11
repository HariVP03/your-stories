import React, { useEffect, useMemo, useState } from "react";
import { chakra, Flex } from "@chakra-ui/react";

import { TextStory, Navbar, ThumbnailStory, UserCard } from "@components";
import Head from "next/head";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_RANDOM_USERS } from "@queries";

const Home: React.FC = () => {
    // let randomUsers: any;
    const [randomUsers, setRandomUsers] = useState<any>();
    const [getRandomUsers, { called, loading }] =
        useLazyQuery(GET_RANDOM_USERS);
    useEffect(() => {
        getRandomUsers().then((e: any) => {
            setRandomUsers(e.data.getRandomUsers);
        });
    }, []);

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
                    <TextStory
                        id="321"
                        authorAvatar=""
                        authorName="Hari Vishnu Parashar"
                        body="Haha ok text go brrrr"
                        date="April 11, 2022"
                        title="Haha ok Title"
                        topic="Blockchain"
                    />
                    <ThumbnailStory
                        id="123"
                        authorAvatar=""
                        authorName="Lambu Singh"
                        body="Haha ok text go brr"
                        date="April 01, 2022"
                        thumbnail=""
                        title="I Met JFK"
                        topic="Web3"
                    />
                    <TextStory
                        authorAvatar=""
                        id="543"
                        authorName="Chotu Singh"
                        body="Yes no Text"
                        date="April 07, 2022"
                        title="Title Accessibility"
                        topic="Technology"
                    />
                </Flex>
                <Flex
                    flexWrap="wrap"
                    justify="center"
                    gap={12}
                    p={5}
                    w="full"
                    h="fit-content"
                >
                    <TextStory
                        id="321"
                        authorAvatar=""
                        authorName="Hari Vishnu Parashar"
                        body="Haha ok text go brrrr"
                        date="April 11, 2022"
                        title="Haha ok Title"
                        topic="Blockchain"
                    />
                    <ThumbnailStory
                        id="123"
                        authorAvatar=""
                        authorName="Lambu Singh"
                        body="Haha ok text go brr"
                        date="April 01, 2022"
                        thumbnail=""
                        title="I Met JFK"
                        topic="Web3"
                    />
                    <TextStory
                        authorAvatar=""
                        id="543"
                        authorName="Chotu Singh"
                        body="Yes no Text"
                        date="April 07, 2022"
                        title="Title Accessibility"
                        topic="Technology"
                    />
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
