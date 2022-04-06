import { chakra, Flex } from "@chakra-ui/react";
import { Navbar, StoryBody } from "@components";
import { NextPage } from "next";
import Head from "next/head";

const Write: NextPage = () => {
    return (
        <>
            <Head>
                <title>Your Stories | Write a Story</title>
            </Head>
            <chakra.main>
                <Navbar />
                <Flex w="full" h="100vh" pt={3} direction="column">
                    <StoryBody />
                </Flex>
            </chakra.main>
        </>
    );
};

export default Write;
