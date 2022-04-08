import { useQuery } from "@apollo/client";
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
import { GET_USER_BY_ID } from "@queries";
import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { auth } from "src/firebase";
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

const Navbar: React.FC = () => {
    const [user, setUser] = useState<User | null>();
    const router = useRouter();
    onAuthStateChanged(auth, (res) => {
        setUser(res);
    });
    const { loading } = useQuery(GET_USER_BY_ID, {
        onCompleted: (data) => {
            console.log(data);
        },
        variables: {
            getUserId: "624c281f3a0f553921f5a5cc",
        },
    });
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
                <Menu>
                    <MenuButton
                        cursor="pointer"
                        size="sm"
                        as={Avatar}
                        src={user?.photoURL || ""}
                    />
                    <MenuList
                        border="1px solid"
                        borderColor="gray.400"
                        rounded="none"
                    >
                        {!user ? (
                            <>
                                <MenuItem onClick={() => router.push("/login")}>
                                    Login
                                </MenuItem>
                                <MenuItem
                                    onClick={() => router.push("/signup")}
                                >
                                    Signup
                                </MenuItem>
                            </>
                        ) : (
                            <>
                                <MenuItem>Profile</MenuItem>
                                <MenuItem>Write a Story</MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        auth.signOut();
                                    }}
                                >
                                    Log out
                                </MenuItem>
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
