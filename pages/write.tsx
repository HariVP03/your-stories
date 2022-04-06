import { chakra } from "@chakra-ui/react";
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
            </chakra.main>
        </>
    );
};

export default Write;
