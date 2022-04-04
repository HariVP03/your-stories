import React from "react";
import {
    chakra,
    Box,
    Image,
    Flex,
    useColorModeValue,
    Link,
} from "@chakra-ui/react";

const TextStory: React.FC = () => {
    return (
        <Box
            px={8}
            py={4}
            rounded="none"
            shadow="lg"
            cursor="pointer"
            _hover={{ transform: "translateY(-5px)" }}
            transition="transform 100ms linear"
            border="1px solid"
            borderColor="gray.400"
            bg={useColorModeValue("white", "gray.800")}
            maxW="2xl"
        >
            <Flex justifyContent="space-between" alignItems="center">
                <chakra.span
                    fontSize="sm"
                    color={useColorModeValue("gray.600", "gray.400")}
                >
                    Mar 10, 2019
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
                    Design
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
                    Accessibility tools for designers and developers
                </Link>
                <chakra.p
                    mt={2}
                    color={useColorModeValue("gray.600", "gray.300")}
                >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempora expedita dicta totam aspernatur doloremque.
                    Excepturi iste iusto eos enim reprehenderit nisi, accusamus
                    delectus nihil quis facere in modi ratione libero!
                </chakra.p>
            </Box>

            <Flex justifyContent="space-between" alignItems="center" mt={4}>
                <Link
                    color={useColorModeValue("brand.600", "brand.400")}
                    _hover={{ textDecor: "underline" }}
                >
                    Read more
                </Link>

                <Flex alignItems="center">
                    <Image
                        mx={4}
                        w={10}
                        h={10}
                        rounded="full"
                        fit="cover"
                        display={{ base: "none", sm: "block" }}
                        src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                        alt="avatar"
                    />
                    <Link
                        color={useColorModeValue("gray.700", "gray.200")}
                        fontWeight="700"
                        cursor="pointer"
                    >
                        Khatab wedaa
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default TextStory;
