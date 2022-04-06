import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Avatar,
    Button,
    chakra,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import styles from "./navButton.module.css";

const NavButton: React.FC<{
    children: React.ReactNode;
    href: string;
}> = ({ children, href }) => {
    const router = useRouter();
    const isActive = router.pathname === href;
    return (
        <Button
            onClick={() => {
                router.push(href);
            }}
            _hover={{}}
            _active={{}}
            _focus={{}}
            className={isActive ? styles.active : styles.hover}
            bg="transparent"
        >
            {children}
        </Button>
    );
};

const Navbar: React.FC<{ user?: any }> = ({ user }) => {
    return (
        <Flex
            direction="column"
            w="100vw"
            justify="end"
            h="100px"
            borderBottom="1px solid black"
            align="center"
            zIndex="1"
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
                {/* <Avatar cursor="pointer" size="sm" /> */}

                <Menu>
                    <MenuButton
                        cursor="pointer"
                        size="sm"
                        as={Avatar}
                        src={user?.photoUrl || ""}
                        // rightIcon={<ChevronDownIcon />}
                    />
                    <MenuList
                        border="1px solid"
                        borderColor="gray.400"
                        rounded="none"
                    >
                        {!user ? (
                            <>
                                <MenuItem>Login</MenuItem>
                                <MenuItem>Signup</MenuItem>
                            </>
                        ) : (
                            <>
                                <MenuItem>Profile</MenuItem>
                                <MenuItem>Write a Story</MenuItem>
                                <MenuItem>Log out</MenuItem>
                            </>
                        )}
                    </MenuList>
                </Menu>
            </Flex>
            <Flex zIndex="3" h="50px" w="min" gap={12} justify="space-around">
                <NavButton href="/">Read Stories</NavButton>
                <NavButton href="/write">Write a Story</NavButton>
            </Flex>
        </Flex>
    );
};

export default Navbar;
