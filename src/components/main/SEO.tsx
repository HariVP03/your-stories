import { Text, VisuallyHidden } from "@chakra-ui/react";
// import { myData } from "@definitions/static/data";
import Head from "next/head";
import React, { FC } from "react";

type Props = {
    description?: string;
    title?: string;
    image?: string;
    url?: string;
    video?: string;
    data?: any;
};
const defaults = {
    title: "Your Stories",
    description:
        "Write and share your stories and thoughts with the world with ease and read what other people have to share.",
    image: "/your-stories.png",
    url: "https://your-stories-hari.netlify.app/",
};
const SEO: FC<Props> = ({
    title = defaults.title,
    description = defaults.title,
    image = defaults.image,
    url = defaults.url,
    video = "",
    data = {},
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="title" content={title} />
                <link rel="icon" href="/icons/smile.svg" />
                <meta name="description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={url} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={url} />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image" content={image} />
                {video && (
                    <>
                        <meta property="og:video:url" content={video} />
                        <meta property="twitter:video:url" content={video} />
                    </>
                )}
                <VisuallyHidden as={"code"}>
                    {JSON.stringify(data)}
                </VisuallyHidden>
            </Head>
            <VisuallyHidden>
                <h1>{title}</h1>
                <p>{description}</p>
                <Text as={"code"}>{JSON.stringify(data)}</Text>
            </VisuallyHidden>
        </>
    );
};

export default SEO;
