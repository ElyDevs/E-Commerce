import { Container, Flex, VStack, Box } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";
import ImageSlider from "../../components/Animation/ImageSlider"; // Import the ImageSlider

const AuthPage = () => {
  return (
    <Flex height="100vh" justifyContent="center" alignItems="center" px={6}>
      <Container
        maxW="container.md"
        border="1px solid gray"
        borderRadius="md"
        boxShadow="md" // Added shadow for a lifted effect
        p={6} // Added padding inside the container
      >
        <Flex alignItems="stretch">
          {/* Left Side */}
          <Box
            display={{ base: "none", md: "block" }}
            flex="1"
            h="640px"
            maxW="360px"
            // 16:9 ASPECT RATIO TO TELL IN THE DASHBOARD YOU KNOW PLEASE DONT FORGET
          >
            <ImageSlider /> {/* Use the ImageSlider component */}
          </Box>

          {/* Right Side */}
          <VStack
            flex="1"
            align="stretch"
            spacing={6}
            p={{ base: "none", md: 6 }} // Responsive padding
            display={"flex"}
            justifyContent={"center"}
          >
            <AuthForm />
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
