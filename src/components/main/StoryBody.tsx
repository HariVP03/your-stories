import { Avatar, chakra, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

const StoryBody: React.FC<{
    editMode?: boolean;
    title?: string;
    topic?: string;
    authorName?: string;
    date?: string;
    body?: string;
}> = ({
    editMode = false,
    title = "Title of the Story",
    topic = "Your Topic",
    authorName = "Your Name",
    date = "April 6, 2022",
    body = "Your story goes here.. :)",
}) => {
    const [editTitle, setEditTitle] = useState("Title of the Story");
    const [editTopic, setEditTopic] = useState("Your Topic");
    const [editBody, setEditBody] = useState("Your Story goes gere.. :)");
    return (
        <Flex w="full" px={12} pt={5} direction="column">
            {/* <Text>{topic}</Text> */}
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
            {/* <chakra.h1 fontSize="4xl">{title}</chakra.h1> */}
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
            <Flex align="center" gap={2}>
                <Avatar h="40px" w="40px" />
                <Flex direction="column">
                    <Text my="auto" fontSize="lg">
                        {authorName}
                    </Text>
                    <Text my="auto" fontSize="sm">
                        {date}
                    </Text>
                </Flex>
            </Flex>
            <Flex mt={12}>
                <Input
                    mb={5}
                    _active={{}}
                    _focus={{}}
                    // fontWeight="500"
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                    _placeholder={{ color: "black" }}
                    placeholder={body}
                    // fontSize="4xl"
                    px={0}
                    border="0px"
                />
            </Flex>
        </Flex>
    );
};

export default StoryBody;
