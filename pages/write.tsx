import { chakra, Flex, useToast } from "@chakra-ui/react";
import { Navbar, StoryBody } from "@components";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

const Write: NextPage = () => {
    const toast = useToast();
    useEffect(() => {
        toast({
            title: "Click on the text to edit it",
            isClosable: true,
            variant: "solid",
            status: "info",
        });
    }, []);
    return (
        <>
            <Head>
                <title>Your Stories | Write a Story</title>
            </Head>
            <chakra.main>
                <Navbar />
                <Flex w="full" h="100vh" pt={3} direction="column">
                    <StoryBody editMode />
                </Flex>
            </chakra.main>
        </>
    );
};

export default Write;
