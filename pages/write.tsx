import {
    chakra,
    Flex,
    Icon,
    Stack,
    useColorModeValue,
    useToast,
    Image,
    VisuallyHidden,
    Text,
    Button,
} from "@chakra-ui/react";
import { Navbar, StoryBody } from "@components";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { auth } from "src/firebase";

const Write: NextPage = () => {
    const toast = useToast();
    const user = auth.currentUser;
    const [thumbnail, setThumbnail] = useState<File | null>();
    useEffect(() => {
        toast({
            title: "Click on the text to edit it",
            isClosable: true,
            variant: "solid",
            status: "info",
        });
    }, []);
    return (
        <>
            <Head>
                <title>Your Stories | Write a Story</title>
            </Head>
            <chakra.main>
                <Navbar />
                <Flex w="full" minH="100vh" pt={3} direction="column">
                    <StoryBody
                        authorAvatar={user?.photoURL || ""}
                        authorName={user?.displayName || ""}
                        editMode
                    />
                    <Flex
                        mt={1}
                        // justify="center"
                        px={6}
                        mx="auto"
                        pt={5}
                        pb={6}
                        mb={5}
                        w="30%"
                        onDragOver={(e) => {
                            e.preventDefault();
                        }}
                        onDragEnter={(e) => {
                            e.preventDefault();
                        }}
                        onDrop={(e) => {
                            setThumbnail(e.dataTransfer.files[0]);
                        }}
                        justify="center"
                        borderWidth={2}
                        borderColor={useColorModeValue("gray.300", "gray.500")}
                        borderStyle="dashed"
                        rounded="none"
                    >
                        <Stack spacing={1} textAlign="center">
                            <Icon
                                mx="auto"
                                boxSize={12}
                                color={useColorModeValue(
                                    "gray.400",
                                    "gray.500",
                                )}
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                            >
                                <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </Icon>
                            <Flex
                                fontSize="sm"
                                color={useColorModeValue(
                                    "gray.600",
                                    "gray.400",
                                )}
                                alignItems="baseline"
                                justify="center"
                            >
                                <chakra.label
                                    htmlFor="file-upload"
                                    cursor="pointer"
                                    rounded="md"
                                    fontSize="md"
                                    color={useColorModeValue(
                                        "brand.600",
                                        "brand.200",
                                    )}
                                    pos="relative"
                                    _hover={{
                                        color: "red.200",
                                    }}
                                    transition="color 100ms linear"
                                >
                                    <span>Click here to upload a file</span>
                                    <VisuallyHidden>
                                        <input
                                            id="file-upload"
                                            name="file-upload"
                                            type="file"
                                            accept="image/jpeg, image/png,image/jpg"
                                            onChange={(e) => {
                                                if (
                                                    e.target.files &&
                                                    e.target.files[0] !== null
                                                )
                                                    setThumbnail(
                                                        e.target.files[0],
                                                    );
                                            }}
                                        />
                                    </VisuallyHidden>
                                </chakra.label>
                                <Text pl={1}>or drag and drop</Text>
                            </Flex>
                            <Text
                                fontSize="xs"
                                color={useColorModeValue("gray.500", "gray.50")}
                            >
                                PNG, JPG, GIF up to 10MB
                            </Text>
                            {thumbnail ? (
                                <Image
                                    minW="200px"
                                    // maxW="300px"
                                    minH="200px"
                                    // maxH="300px"
                                    src={URL.createObjectURL(thumbnail)}
                                />
                            ) : (
                                ""
                            )}
                        </Stack>
                    </Flex>
                    <Flex gap={12} w="full" justify="center" px={12} mb={12}>
                        <Button rounded="none" variant="ghost">
                            Clear
                        </Button>
                        <Button rounded="none" variant="solid">
                            Submit
                        </Button>
                    </Flex>
                </Flex>
            </chakra.main>
        </>
    );
};

export default Write;
