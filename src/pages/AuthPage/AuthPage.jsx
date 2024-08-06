import { Container, Flex, VStack, Box, Image, Text } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex h={"100vh"} justifyContent={"center"} alignItems={"center"} px={6}>
      <Container
        maxW={"container.md"}
        border={"1px solid gray"}
        borderRadius={6}
      >
        <Flex justifyContent={"center"} alignItems={"stretch"} w="100%">
          {/* Left Side */}
          <Box flex="1" display={{ base: "none", md: "block" }} p={6}>
            <Image
              border={"1px solid gray"}
              borderRadius={6}
              src="/FashionModel.jpg"
              alt="Fashion Model"
              boxSize="100%"
              objectFit="cover"
            />
          </Box>

          {/* Right Side */}
          <VStack flex="1" align={"stretch"} spacing={6} p={6}>
            <AuthForm />
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
