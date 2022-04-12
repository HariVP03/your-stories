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
import { SEO } from "@components";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const apolloClient = initializeApollo();
    const queryClient = new QueryClient();
    return (
        <>
            <SEO />
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
