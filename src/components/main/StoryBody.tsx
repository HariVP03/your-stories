import {
    Avatar,
    chakra,
    Checkbox,
    Flex,
    Input,
    Radio,
    Text,
    Textarea,
} from "@chakra-ui/react";
import Markdown from "markdown-to-jsx";
import moment from "moment";
import { useState } from "react";
import { auth } from "src/firebase";
import styles from "./markdown.module.css";

const StoryBody: React.FC<{
    editMode?: boolean;
    title?: string;
    topic?: string;
    body?: string;
}> = ({
    editMode = false,
    title = "Title of the Story",
    topic = "Your Topic",
    body = "Your story goes here.. :)",
}) => {
    const [editTitle, setEditTitle] = useState("Title of the Story");
    const [editTopic, setEditTopic] = useState("Your Topic");
    const [editBody, setEditBody] = useState("Your story goes here.. :)");
    const [preview, setPreview] = useState<boolean>(false);
    const date = moment().format("MMM, DD, YYYY");
    const user = auth.currentUser;

    return (
        <Flex w="full" px={12} pt={5} direction="column">
            {/* <Text>{topic}</Text> */}
            {editMode ? (
                <>
                    <Input
                        mb={3}
                        _active={{}}
                        _focus={{}}
                        // fontWeight="500"
                        value={editTopic}
                        onChange={(e) => setEditTopic(e.target.value)}
                        _placeholder={{ color: "black" }}
                        placeholder={topic}
                        // fontSize="4xl"
                        px={0}
                        border="0px"
                    />
                    <Input
                        mb={5}
                        _active={{}}
                        _focus={{}}
                        fontWeight="500"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        _placeholder={{ color: "black" }}
                        placeholder={title}
                        fontSize="4xl"
                        px={0}
                        border="0px"
                    />
                </>
            ) : (
                <>
                    <Text>{topic}</Text>
                    <chakra.h1 fontSize="4xl">{title}</chakra.h1>
                </>
            )}
            {/* <chakra.h1 fontSize="4xl">{title}</chakra.h1> */}
            <Flex align="center" gap={2}>
                <Avatar src={user?.photoURL || ""} h="40px" w="40px" />

                <Flex direction="column">
                    <Text my="auto" fontSize="lg">
                        {user?.displayName || "Author Name"}
                    </Text>
                    <Text my="auto" fontSize="sm">
                        {date}
                    </Text>
                </Flex>
            </Flex>
            {editMode ? (
                <Flex gap={2} mb={0} mt={12}>
                    <Checkbox
                        // value={preview}
                        defaultChecked={false}
                        onChange={(e) => setPreview(e.target.checked)}
                    />{" "}
                    Preview Mode
                </Flex>
            ) : (
                ""
            )}
            <Flex mt={editMode ? 4 : 12}>
                {editMode ? (
                    !preview ? (
                        <Textarea
                            mb={5}
                            _active={{}}
                            _focus={{}}
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                            _placeholder={{ color: "black" }}
                            placeholder={body}
                            resize="vertical"
                            h="2xl"
                            border="1px solid"
                            borderColor="gray.400"
                        />
                    ) : (
                        <Text
                            className={styles.markdown}
                            mb={5}
                            py={0}
                            px={0}
                            as={Markdown}
                        >
                            {editBody}
                        </Text>
                    )
                ) : (
                    body
                )}
            </Flex>
        </Flex>
    );
};

export default StoryBody;
