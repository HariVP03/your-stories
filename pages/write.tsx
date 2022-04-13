import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
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
import { GET_USER_BY_EMAIL } from "@queries";
import { onAuthStateChanged } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import moment from "moment";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { auth, storage } from "src/firebase";
import { ADD_STORY } from "src/graphQL/mutations";

const Write: NextPage = () => {
    const [editTitle, setEditTitle] = useState("Title of the Story");
    const [editTopic, setEditTopic] = useState("Your Topic");
    const [editBody, setEditBody] = useState("Your story goes here.. :)");
    const [loading, setLoading] = useState<boolean>(false);
    const date = moment().format("MMM, DD, YYYY");
    const toast = useToast({
        containerStyle: {
            borderRadius: "0px",
            background: "#bee3f8",
            border: "1px solid black",
        },
    });
    const [user, setUser] = useState(auth.currentUser);
    onAuthStateChanged(auth, (res) => {
        setUser(res);
    });

    const [thumbnail, setThumbnail] = useState<File | null>();
    useEffect(() => {
        toast({
            title: "Click on the text to edit it",
            isClosable: true,
            variant: "subtle",
            status: "info",
        });
    }, []);

    const [getUserByEmail] = useLazyQuery(GET_USER_BY_EMAIL);
    const [addStory] = useMutation(ADD_STORY);

    const router = useRouter();
    const pushAndToastSuccess = () => {
        router.push("/");
        toast({
            status: "success",
            title: "Your story was successfully added!",
            containerStyle: {
                background: "#38a169",
                border: "1px solid black",
            },
            isClosable: true,
        });
    };
    const pushAndToastError = () => {
        router.push("/");
        toast({
            status: "error",
            title: "There was a problem adding your story",
            containerStyle: {
                background: "#e53e3e",
                border: "1px solid black",
            },
            isClosable: true,
        });
    };

    const onSubmit = () => {
        setLoading(true);
        if (!thumbnail) return;
        const thumbnailRef = ref(
            storage,
            `/images/${user?.uid}/${Math.floor(
                Math.random() * 1000,
            )}/thumbnail`,
        );
        uploadBytes(thumbnailRef, thumbnail)
            .then((snap) => getDownloadURL(snap.ref))
            .then((url) =>
                getUserByEmail({ variables: { email: user?.email } }).then(
                    (res) => {
                        const id = res.data.getUserByEmail.id;
                        const data = {
                            title: editTitle,
                            date,
                            body: editBody,
                            authorId: id,
                            thumbnail: url,
                            topic: editTopic,
                        };
                        addStory({
                            variables: { data },
                            onCompleted: (e) => {
                                setLoading(false);
                                pushAndToastSuccess();
                            },
                            onError: (e) => {
                                setLoading(false);
                                pushAndToastError();
                            },
                        });
                    },
                ),
            );
    };

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
                        authorName={user?.displayName || "Your Name"}
                        date={date}
                        editBody={editBody}
                        editTitle={editTitle}
                        editTopic={editTopic}
                        setEditBody={setEditBody}
                        setEditTitle={setEditTitle}
                        setEditTopic={setEditTopic}
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
                        <Button
                            onClick={() => console.log(user)}
                            rounded="none"
                            variant="ghost"
                        >
                            Clear
                        </Button>
                        <Button
                            onClick={onSubmit}
                            disabled={!user}
                            rounded="none"
                            variant="solid"
                            isLoading={loading}
                        >
                            Submit
                        </Button>
                    </Flex>
                </Flex>
            </chakra.main>
        </>
    );
};

export default Write;
