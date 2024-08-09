import React from "react";
import {
  Container,
  Stack,
  Skeleton,
  Table,
  Tbody,
  Td,
  Tr,
  Th,
  Thead,
  Tfoot,
  TableContainer,
  Box,
  Text,
  useBreakpointValue,
  SkeletonText,
} from "@chakra-ui/react";

const LoadingUserProfile = () => {
  const isTableLayout = useBreakpointValue({
    base: false,
    md: false,
    lg: true,
    xl: true,
  });

  return (
    <Box>
      <Container
        my={10}
        maxW={{ base: "100%", md: "100%", lg: "75%", xl: "50%" }}
      >
        <Skeleton mb={5} borderRadius={10} height="40px" width="200px" />
        <Stack spacing={10}>
          <TableContainer
            border={"1px solid gray"}
            shadow={"md"}
            borderRadius={10}
          >
            {isTableLayout ? (
              <Table size={{ base: "sm", md: "md", lg: "lg" }} variant="simple">
                <Thead>
                  <Tr>
                    <Th colSpan={3}>
                      <Skeleton height="20px" width="100px" />
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <Skeleton height="20px" width="150px" />
                    </Td>
                    <Td>
                      <Skeleton height="20px" width="200px" />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Skeleton height="20px" width="150px" />
                    </Td>
                    <Td>
                      <Skeleton height="20px" width="200px" />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Skeleton height="20px" width="150px" />
                    </Td>
                    <Td>
                      <Skeleton height="20px" width="200px" />
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            ) : (
              <Box>
                <Table
                  size={{ base: "sm", md: "md", lg: "lg" }}
                  variant="simple"
                >
                  <Thead>
                    <Tr>
                      <Th colSpan={3}>
                        <Skeleton height="20px" width="100px" />
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>
                        <Skeleton height="20px" width="150px" />
                        <br />
                        <Skeleton height="20px" width="200px" />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Skeleton height="20px" width="150px" />
                        <br />
                        <Skeleton height="20px" width="200px" />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Skeleton height="20px" width="150px" />
                        <br />
                        <Skeleton height="20px" width="200px" />
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            )}
          </TableContainer>

          <TableContainer
            border={"1px solid gray"}
            shadow={"md"}
            borderRadius={10}
          >
            {isTableLayout ? (
              <Table size={{ base: "sm", md: "md", lg: "lg" }} variant="simple">
                <Thead>
                  <Tr>
                    <Th colSpan={3}>
                      <Skeleton height="20px" width="100px" />
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Array(7)
                    .fill(0)
                    .map((_, index) => (
                      <Tr key={index}>
                        <Td>
                          <Skeleton height="20px" width="150px" />
                        </Td>
                        <Td>
                          <Skeleton height="20px" width="200px" />
                        </Td>
                        <Td>
                          <Skeleton height="20px" width="75px" />
                        </Td>
                      </Tr>
                    ))}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Td colSpan={2}>
                      <SkeletonText noOfLines={2} height="20px" />
                    </Td>
                    <Td>
                      <Skeleton borderRadius={10} height="40px" width="75px" />
                    </Td>
                  </Tr>
                </Tfoot>
              </Table>
            ) : (
              <Table size={{ base: "sm", md: "md", lg: "lg" }} variant="simple">
                <Thead>
                  <Tr>
                    <Th colSpan={3}>
                      <Skeleton height="20px" width="100px" />
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Array(7)
                    .fill(0)
                    .map((_, index) => (
                      <Tr key={index}>
                        <Td>
                          <Skeleton height="20px" width="150px" />
                          <br />
                          <Skeleton height="20px" width="200px" />
                        </Td>
                        <Td isNumeric>
                          <Skeleton height="20px" width="75px" />
                        </Td>
                      </Tr>
                    ))}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Td colSpan={3}>
                      <SkeletonText mb={5} noOfLines={2} height="20px" />
                      <Skeleton borderRadius={10} height="40px" width="75px" />
                    </Td>
                  </Tr>
                </Tfoot>
              </Table>
            )}
          </TableContainer>
        </Stack>
      </Container>
    </Box>
  );
};

export default LoadingUserProfile;
