import React from "react";
import { chakra, Flex } from "@chakra-ui/react";

import { TextStory, Navbar } from "@components";
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
                <Flex p={5} w="full">
                    <TextStory />
                </Flex>
            </chakra.main>
        </>
    );
};

export default Home;
