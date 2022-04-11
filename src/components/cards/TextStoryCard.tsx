import React from "react";
import {
    chakra,
    Box,
    Image,
    Flex,
    useColorModeValue,
    Link,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const TextStory: React.FC<{
    title: string;
    body: string;
    authorName: string;
    authorAvatar: string;
    date: string;
    topic: string;
    id: string;
}> = ({ title, body, authorAvatar, authorName, date, topic, id }) => {
    const router = useRouter();
    return (
        <Box
            px={8}
            py={4}
            rounded="none"
            shadow="lg"
            onClick={() => router.push(`/story/${id}`)}
            cursor="pointer"
            _hover={{ transform: "translateY(-5px)" }}
            transition="transform 100ms linear"
            border="1px solid"
            borderColor="gray.400"
            h="fit-content"
            bg={useColorModeValue("white", "gray.800")}
            maxW="md"
        >
            <Flex justifyContent="space-between" alignItems="center">
                <chakra.span
                    fontSize="sm"
                    color={useColorModeValue("gray.600", "gray.400")}
                >
                    {date}
                </chakra.span>
                <Link
                    px={3}
                    py={1}
                    bg="gray.600"
                    color="gray.100"
                    fontSize="sm"
                    fontWeight="700"
                    rounded="md"
                    _hover={{ bg: "gray.500" }}
                >
                    {topic}
                </Link>
            </Flex>

            <Box mt={2}>
                <Link
                    fontSize="2xl"
                    color={useColorModeValue("gray.700", "white")}
                    fontWeight="700"
                    _hover={{
                        color: useColorModeValue("gray.600", "gray.200"),
                        textDecor: "underline",
                    }}
                >
                    {title}
                </Link>
                <chakra.p
                    mt={2}
                    color={useColorModeValue("gray.600", "gray.300")}
                    noOfLines={2}
                >
                    {body}
                </chakra.p>
            </Box>

            <Flex justifyContent="space-between" alignItems="center" mt={4}>
                <Flex alignItems="center">
                    <Image
                        mr={3}
                        w={10}
                        h={10}
                        rounded="full"
                        fit="cover"
                        display={{ base: "none", sm: "block" }}
                        src={
                            authorAvatar ||
                            "https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                        }
                        alt="avatar"
                    />
                    <Link
                        color={useColorModeValue("gray.700", "gray.200")}
                        fontWeight="700"
                        cursor="pointer"
                    >
                        {authorName}
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default TextStory;
