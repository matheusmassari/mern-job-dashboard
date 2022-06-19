import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
    Box,
    Grid,
    Container,
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,    
    Input,
    Image,
    Center,
    Heading,
    VStack,
    Button,  
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../utils/registerSchema";
import { useAppContext } from "../context/appContext";

const RegisterPage = () => {
    // const context = useAppContext();
    // console.log(context)

    // React-Hook-Form and Yup Validation (useForm) //
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema),
        mode: "onBlur",
    });
    // End //

    const [isMember, setIsMember] = useState(true);

    const toggleMember = () => setIsMember(!isMember)

    const submitUser = (data) => {
        console.log(data);
    };

    return (
        <Grid minH="95vh" alignItems="center">
            {/* LOGIN EXISTING USER */}
            {isMember && (
                <form>
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
                            <Image
                                src={"jobstation-logo.svg"}
                                alt="Logo Marca"
                            />
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
                                <FormLabel htmlFor="password">
                                    Password
                                </FormLabel>
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
                                onClick={handleSubmit(submitUser)}
                                disabled={!!errors.email || !!errors.password}
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
            )}

            {/* REGISTER NEW USER */}

            {!isMember && (
                <form>
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
                            <Image
                                src={"jobstation-logo.svg"}
                                alt="Logo Marca"
                            />
                        </Center>
                        <Heading textAlign="center" color="gray.600" mb="2rem">
                            Register
                        </Heading>
                        <VStack spacing={10}>
                            <FormControl isRequired isInvalid={errors.username}>
                                <FormLabel htmlFor="username">
                                    Username
                                </FormLabel>
                                <Input
                                    id="username"
                                    placeholder="Username"
                                    {...register("username")}
                                />
                                <FormErrorMessage>
                                    {errors?.username?.message}
                                </FormErrorMessage>
                            </FormControl>
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
                                <FormLabel htmlFor="password">
                                    Password
                                </FormLabel>
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
                                onClick={handleSubmit(submitUser)}
                                disabled={
                                    !!errors.email ||
                                    !!errors.password ||
                                    !!errors.username
                                }
                            >
                                Submit
                            </Button>
                            <Box>
                                <Text>
                                    Already a member?{" "}
                                    <Button
                                        variant="none"
                                        px="0"
                                        py="0"
                                        color="blue.500"
                                        onClick={toggleMember}
                                    >
                                        Login.
                                    </Button>
                                </Text>
                            </Box>
                        </VStack>
                    </Container>
                </form>
            )}
        </Grid>
    );
};

export default RegisterPage;
