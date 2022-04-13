import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import GoogleButton from "@components/button/google";
import Head from "next/head";

const Login: React.FC = () => {
    return (
        <>
            <Head>
                <title>Your Stories | Login</title>
            </Head>
            <Flex
                minH={"100vh"}
                align={"center"}
                justify={"center"}
                bg={useColorModeValue("gray.50", "gray.800")}
            >
                <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                    <Stack align={"center"}>
                        <Heading fontSize={"4xl"} fontFamily="Poppins">
                            Sign in to your account
                        </Heading>
                        <Text fontSize={"lg"} color={"gray.600"}>
                            to start sharing your stories ✌️
                        </Text>
                    </Stack>
                    <Box
                        rounded={"none"}
                        bg={useColorModeValue("white", "gray.700")}
                        // boxShadow={"lg"}
                        p={8}
                        border="1px solid black"
                        // borderColor="gray.400"
                        boxShadow="5px 5px 0px 0px lime, 5px 5px 0px 1px black"
                    >
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input rounded="none" type="email" />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input rounded="none" type="password" />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: "column", sm: "row" }}
                                    align={"start"}
                                    justify={"space-between"}
                                >
                                    <Checkbox>Remember me</Checkbox>
                                    <Link color={"blue.400"}>
                                        Forgot password?
                                    </Link>
                                </Stack>
                                <Button
                                    bg={"blue.400"}
                                    color={"white"}
                                    _hover={{
                                        bg: "blue.500",
                                    }}
                                    rounded="none"
                                    disabled
                                >
                                    Sign in
                                </Button>
                            </Stack>
                            <Flex justify="center">
                                <GoogleButton />
                            </Flex>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    );
};

export default Login;
