import React from "react";
import {
    chakra,
    Box,
    Image,
    Flex,
    Icon,
    useColorModeValue,
} from "@chakra-ui/react";

import { MdHeadset, MdEmail, MdLocationOn } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";

const UserCard: React.FC<{
    name: string;
    avatar: string;
    status: string;
    aboutMe: string;
    workAt: string;
    basedIn: string;
}> = ({ name, avatar, status, aboutMe, workAt, basedIn }) => {
    return (
        <Box
            w="xs"
            bg={useColorModeValue("white", "gray.800")}
            shadow="lg"
            rounded="none"
            cursor="pointer"
            _hover={{ transform: "translateY(-5px)" }}
            transition="transform 100ms linear"
            border="1px solid"
            borderColor="gray.400"
            overflow="hidden"
        >
            <Image
                w="full"
                h={56}
                fit="cover"
                objectPosition="center"
                src={
                    avatar ||
                    "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                }
                alt="avatar"
            />

            <Flex
                alignItems="center"
                justify="center"
                px={6}
                py={3}
                bg="gray.900"
            >
                {/* <Icon as={MdHeadset} h={6} w={6} color="white" /> */}

                <chakra.h1
                    mx={3}
                    color="white"
                    fontWeight="bold"
                    fontSize="lg"
                    my="auto"
                    textAlign="center"
                    w="full"
                >
                    {status}
                </chakra.h1>
            </Flex>

            <Box py={4} px={6}>
                <chakra.h1
                    fontSize="xl"
                    fontWeight="bold"
                    color={useColorModeValue("gray.800", "white")}
                >
                    {name}
                </chakra.h1>

                <chakra.p
                    py={0}
                    color={useColorModeValue("gray.700", "gray.400")}
                    noOfLines={2}
                >
                    {aboutMe}
                </chakra.p>

                <Flex
                    alignItems="center"
                    mt={4}
                    color={useColorModeValue("gray.700", "gray.200")}
                >
                    <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

                    <chakra.h1 my="auto" px={2} fontSize="sm">
                        {workAt}
                    </chakra.h1>
                </Flex>

                <Flex
                    alignItems="center"
                    mt={4}
                    color={useColorModeValue("gray.700", "gray.200")}
                >
                    <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                    <chakra.h1 my="auto" px={2} fontSize="sm">
                        {basedIn}
                    </chakra.h1>
                </Flex>
            </Box>
        </Box>
    );
};

export default UserCard;
