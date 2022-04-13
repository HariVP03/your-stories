import {
    Avatar,
    chakra,
    Checkbox,
    Flex,
    Input,
    Text,
    Textarea,
} from "@chakra-ui/react";
import Markdown from "markdown-to-jsx";
import { Dispatch, SetStateAction, useState } from "react";
import styles from "./markdown.module.css";

const StoryBody: React.FC<{
    editMode?: boolean;
    title?: string;
    topic?: string;
    body?: string;
    authorName: string;
    authorAvatar: string;
    editTitle?: string;
    editTopic?: string;
    editBody?: string;
    date?: string;
    setEditTitle?: Dispatch<SetStateAction<string>>;
    setEditTopic?: Dispatch<SetStateAction<string>>;
    setEditBody?: Dispatch<SetStateAction<string>>;
}> = ({
    editMode = false,
    title,
    topic,
    body,
    authorName,
    authorAvatar,
    date,
    editBody,
    editTitle,
    editTopic,
    setEditBody,
    setEditTitle,
    setEditTopic,
}) => {
    // const [editTitle, setEditTitle] = useState("Title of the Story");
    // const [editTopic, setEditTopic] = useState("Your Topic");
    // const [editBody, setEditBody] = useState("Your story goes here.. :)");
    const [preview, setPreview] = useState<boolean>(false);
    // const date = moment().format("MMM, DD, YYYY");

    return (
        <Flex w="full" px={12} pt={5} direction="column">
            {editMode ? (
                <>
                    <Input
                        mb={3}
                        _active={{}}
                        _focus={{}}
                        // fontWeight="500"
                        value={editTopic}
                        onChange={(e) => setEditTopic?.(e.target.value)}
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
                        onChange={(e) => setEditTitle?.(e.target.value)}
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
            <Flex align="center" gap={2}>
                <Avatar src={authorAvatar} h="40px" w="40px" />

                <Flex direction="column">
                    <Text my="auto" fontSize="lg">
                        {authorName}
                    </Text>
                    <Text my="auto" fontSize="sm">
                        {date}
                    </Text>
                </Flex>
            </Flex>
            {editMode ? (
                <Flex gap={2} mb={0} mt={12}>
                    <Checkbox
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
                            onChange={(e) => setEditBody?.(e.target.value)}
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
                    // body
                    <Text
                        className={styles.markdown}
                        mb={5}
                        py={0}
                        px={0}
                        as={Markdown}
                    >
                        {body || ""}
                    </Text>
                )}
            </Flex>
        </Flex>
    );
};

export default StoryBody;
