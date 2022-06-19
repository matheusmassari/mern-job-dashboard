import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
    Box,
    Grid,
    Container,
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Image,
    Center,
    Heading,
    VStack,
    Button,
    Link,
    chakra,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import NextLink from "next/link";

// Setup inicial - Sem Contexto

const schema = yup
    .object()
    .shape({
        username: yup
            .string("Não deve conter caracteres especiais")
            .required("Campo obrigatório"),
        email: yup
            .string()
            .email("Email inválido")
            .required("O email é obrigatório"),
        password: yup
            .string()
            .required("Por favor, digite sua senha.")
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "A senha deve conter pelo menos 8 caracteres, uma maiúscula, um número e um caractere especial."
            ),
    })
    .required();

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
    });   

    const submitUser = (data) => {
        console.log(data);
    };

    return (
        <Grid minH="95vh" alignItems="center">
            <form>
                <Container
                    borderTop="6px solid"
                    borderTopColor="blue.500"
                    backgroundColor="white"
                    w="30rem"
                    height="fit-content"
                    borderRadius="8px"
                    px="3rem"
                    py="2rem"
                >
                    <Center mb="2rem">
                        <Image src={"jobstation-logo.svg"} alt="Logo Marca" />
                    </Center>
                    <Heading textAlign="center" color="gray.600" mb="2rem">
                        Register
                    </Heading>
                    <VStack spacing={10}>
                        <FormControl isRequired isInvalid={errors.username}>
                            <FormLabel htmlFor="username">Username</FormLabel>
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
                                <NextLink href="/landing" passHref>
                                    <Link style={{ textDecoration: "none" }}>
                                        <chakra.span color="blue.500" as="u">
                                            Login.
                                        </chakra.span>
                                    </Link>
                                </NextLink>
                            </Text>
                        </Box>
                    </VStack>
                </Container>
            </form>
        </Grid>
    );
};

export default RegisterPage;
