import React from "react";
import {
    Container,
    Center,
    Image,
    Heading,
    Text,
    VStack,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    Button,
    Box,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/loginSchema";
import { useAppContext } from "../../context/appContext";

const LoginForm = ({ toggleMember }) => {
    const { isLoading, registerUser } = useAppContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
        mode: "onBlur",
    });

    const registrationSubmit = (data) => {
        const { email, password } = data;
        const currentUser = { email, password };
        if (isMember) {
            console.log("This username already exists.");
        } else {
            registerUser(currentUser);
        }
    };

    return (
        <form onSubmit={handleSubmit(registrationSubmit)}>
            <Container
                borderTop="6px solid"
                borderTopColor="blue.500"
                backgroundColor="white"
                w="30rem"
                h="fit-content"
                borderRadius="8px"
                px="3rem"
                py="2rem"
            >
                <Center mb="2rem">
                    <Image src={"jobstation-logo.svg"} alt="Logo Marca" />
                </Center>
                <Heading textAlign="center" color="gray.600" mb="2rem">
                    Login
                </Heading>
                <VStack spacing={10}>
                    <FormControl isRequired isInvalid={errors.email}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                            id="email"
                            placeholder="Email"
                            {...register("email")}
                        />
                        <FormErrorMessage>
                            {errors?.email?.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isRequired isInvalid={errors.password}>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                            type="password"
                            id="password"
                            placeholder="Password"
                            {...register("password")}
                        />
                        <FormErrorMessage>
                            {errors?.password?.message}
                        </FormErrorMessage>
                    </FormControl>
                    <Button
                        colorScheme="blue"
                        w="100%"
                        type="submit"
                        disabled={
                            !!errors.email || !!errors.password || isLoading
                        }
                    >
                        Submit
                    </Button>
                    <Box>
                        <Text>
                            Not a member?{" "}
                            <Button
                                variant="none"
                                px="0"
                                py="0"
                                color="blue.500"
                                onClick={toggleMember}
                            >
                                Register.
                            </Button>
                        </Text>
                    </Box>
                </VStack>
            </Container>
        </form>
    );
};

export default LoginForm;
