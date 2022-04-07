import { FcGoogle } from "react-icons/fc";
import { Button } from "@chakra-ui/react";
import { getRedirectResult, signInWithRedirect } from "firebase/auth";
import { auth, googleProvider } from "src/firebase";
import { useRouter } from "next/router";

export default function GoogleButton() {
    const router = useRouter();
    const res = getRedirectResult(auth).then((res) => {
        if (res) {
            console.log(res);
            router.push("/");
        }
    });
    // if (res) {
    //     router.push("/");
    // }
    return (
        <Button
            w={"fit-content"}
            border="1px solid"
            borderColor="gray.300"
            onClick={() => {
                signInWithRedirect(auth, googleProvider);
            }}
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
