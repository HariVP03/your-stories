import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import "@styles/global.scss";
import { initializeApollo } from "@services/graphql";
import { ApolloProvider } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { RecoilRoot } from "recoil";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const apolloClient = initializeApollo();
    const queryClient = new QueryClient();
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta
                    name="title"
                    content="Your Stories - Write and share your stories with the world"
                />
                <meta
                    name="description"
                    content="Write and share your stories and thoughts with the world with ease and read what other people have to share."
                />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://metatags.io/" />
                <meta
                    property="og:title"
                    content="Your Stories - Write and share your stories with the world"
                />
                <meta
                    property="og:description"
                    content="Write and share your stories and thoughts with the world with ease and read what other people have to share."
                />
                <meta
                    property="og:image"
                    content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
                />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://metatags.io/" />
                <meta
                    property="twitter:title"
                    content="Your Stories - Write and share your stories with the world"
                />
                <meta
                    property="twitter:description"
                    content="Write and share your stories and thoughts with the world with ease and read what other people have to share."
                />
                <meta
                    property="twitter:image"
                    content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
                />
            </Head>
            <ChakraProvider theme={theme}>
                <ApolloProvider client={apolloClient}>
                    <QueryClientProvider client={queryClient}>
                        <Hydrate state={pageProps.dehydratedState}>
                            <RecoilRoot>
                                <Component {...pageProps} />
                            </RecoilRoot>
                        </Hydrate>
                    </QueryClientProvider>
                </ApolloProvider>
            </ChakraProvider>
        </>
    );
}

export default MyApp;
