import { chakra } from "@chakra-ui/react";
import { Navbar } from "@components";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Story: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <Head>
                <title>Story Title Here</title>
            </Head>
            <chakra.main>
                <Navbar />
                {id}
            </chakra.main>
        </>
    );
};

export default Story;
