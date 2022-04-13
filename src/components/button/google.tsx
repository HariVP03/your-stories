import { FcGoogle } from "react-icons/fc";
import { Button } from "@chakra-ui/react";
import {
    getAuth,
    getRedirectResult,
    onAuthStateChanged,
    signInWithRedirect,
} from "firebase/auth";
import { googleProvider } from "src/firebase";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "src/graphQL/mutations/user";

export default function GoogleButton() {
    const router = useRouter();
    const [createUser] = useMutation(CREATE_USER);
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // console.log(res);
            // window.location;

            createUser({
                variables: {
                    data: {
                        name: user.displayName,
                        email: user.email,
                        avatar: user.photoURL,
                        aboutMe: "Ayo I'm new here!",
                        workAt: "Not here",
                        basedIn: "Somewhere",
                        status: "Ayo I'm new here!",
                    },
                },
            });
            router.push("/");
        }
    });
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
