import { Flex, Image, Text } from "@chakra-ui/react";

const GoogleAuth = ({ prefix }) => {
  return (
    <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
      <Image src="/Google.png" w={5} alt="Google" />
      <Text mx="2" color={"blue.500"}>
        {prefix} With Google
      </Text>
    </Flex>
  );
};

export default GoogleAuth;
