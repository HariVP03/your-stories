import { chakra, Flex } from "@chakra-ui/react";
import { Navbar } from "@components";
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
                <Flex w="full" h="100vh">
                    123
                </Flex>
            </chakra.main>
        </>
    );
};

export default Write;
