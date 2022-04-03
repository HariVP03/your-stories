import { Avatar, Button, chakra, Flex } from "@chakra-ui/react";
import React from "react";
import styles from "./navButton.module.css";

const NavButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Button _hover={{}} className={styles.hover} bg="transparent">
            {children}
        </Button>
    );
};

const Navbar: React.FC = () => {
    return (
        <Flex
            direction="column"
            w="100vw"
            justify="end"
            h="100px"
            borderBottom="1px solid black"
            align="center"
        >
            <chakra.h1
                fontSize="3xl"
                fontWeight="semibold"
                textShadow="2px 0px 2px lime"
                h="50px"
            >
                Your Stories
            </chakra.h1>
            <Flex
                position="absolute"
                zIndex={2}
                align="center"
                w="full"
                h="50px"
                justify="end"
                mr={5}
            >
                <Avatar cursor="pointer" size="sm" />
            </Flex>
            <Flex zIndex="3" h="50px" w="min" gap={12} justify="space-around">
                <NavButton>Read Stories</NavButton>
                <NavButton>Write a Story</NavButton>
            </Flex>
        </Flex>
    );
};

export default Navbar;
