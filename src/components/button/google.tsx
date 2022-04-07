import { FcGoogle } from "react-icons/fc";
import { Button, Center, Text } from "@chakra-ui/react";

export default function GoogleButton() {
    return (
        <Button
            w={"fit-content"}
            border="1px solid"
            borderColor="gray.300"
            rounded="none"
            justifyContent="center"
            variant={"outline"}
            display="flex"
            alignItems="center"
        >
            <FcGoogle />
        </Button>
    );
}
