import React from "react";
import { chakra } from "@chakra-ui/react";

import { Navbar } from "@components";
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
            </chakra.main>
        </>
    );
};

export default Home;
