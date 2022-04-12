import React from "react";
import {
    chakra,
    Box,
    Image,
    Flex,
    useColorModeValue,
    Link,
    Tooltip,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const ThumbnailStory: React.FC<{
    topic: string;
    title: string;
    body: string;
    author: any;
    date: string;
    thumbnail: string;
    id: string;
}> = ({ author, body, date, thumbnail, title, topic, id }) => {
    const router = useRouter();
    return (
        <Box
            rounded="none"
            border="1px solid"
            borderColor="gray.400"
            onClick={() => router.push(`/story/${id}`)}
            shadow="md"
            minW="250px"
            cursor="pointer"
            _hover={{ transform: "translateY(-5px)" }}
            transition="transform 100ms linear"
            bg={useColorModeValue("white", "gray.800")}
            maxW="xs"
            h="fit-content"
        >
            <Image
                roundedTop="none"
                w="full"
                h={32}
                fit="cover"
                src={
                    thumbnail ||
                    "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                }
                alt="Article"
            />

            <Box p={6}>
                <Box>
                    <chakra.span
                        fontSize="xs"
                        textTransform="uppercase"
                        color={useColorModeValue("brand.600", "brand.400")}
                    >
                        {topic}
                    </chakra.span>
                    <Link
                        display="block"
                        color={useColorModeValue("gray.800", "white")}
                        fontWeight="bold"
                        fontSize="2xl"
                        mt={2}
                        _hover={{
                            color: "gray.600",
                            textDecor: "underline",
                        }}
                    >
                        {title}
                    </Link>

                    <chakra.p
                        mt={2}
                        fontSize="sm"
                        color={useColorModeValue("gray.600", "gray.400")}
                        noOfLines={2}
                    >
                        {body}
                    </chakra.p>
                </Box>

                <Box mt={4}>
                    <Flex alignItems="center">
                        <Flex alignItems="center">
                            <Image
                                h={10}
                                w={10}
                                fit="cover"
                                rounded="full"
                                src={
                                    author.avatar ||
                                    "https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                                }
                                alt="Avatar"
                            />
                            <Link
                                mx={3}
                                fontWeight="bold"
                                color={useColorModeValue(
                                    "gray.700",
                                    "gray.200",
                                )}
                            >
                                {author.name}
                            </Link>
                        </Flex>
                        <chakra.span
                            mx={0}
                            fontSize="sm"
                            color={useColorModeValue("gray.600", "gray.300")}
                        >
                            {date}
                        </chakra.span>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default ThumbnailStory;
