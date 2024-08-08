import {
  Box,
  Button,
  Container,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/Firebase";

const UserProfile = () => {
  const { currentUser } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const userDocRef = doc(db, "users", currentUser.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setUserData(userDoc.data());
          console.log("User Data:", userDoc.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (currentUser?.uid) {
      fetchUserData();
    }
  }, [currentUser]);

  if (loading) {
    return <Box>LOADING.......</Box>;
  }

  return (
    <Box>
      <Container my={10} maxW="50%">
        <Text fontSize={"5xl"}>Mon Compte</Text>
        <Stack spacing={10}>
          <TableContainer
            border={"1px solid gray"}
            shadow={"md"}
            borderRadius={10}
          >
            <Table size={"lg"} variant="simple">
              <Thead>
                <Tr>
                  <Th colSpan={3}>Profile</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Full Name</Td>
                  <Td>{userData?.fullName || ""}</Td>
                  <Td isNumeric>
                    <Button colorScheme="teal" variant="link">
                      Change
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Email</Td>
                  <Td>{userData?.email || ""}</Td>
                  <Td isNumeric>
                    <Button colorScheme="teal" variant="link">
                      Change
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Password</Td>
                  <Td>••••••••••••</Td>
                  <Td isNumeric>
                    <Button colorScheme="teal" variant="link">
                      Change
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th colSpan={2}>
                    Member Since:{" "}
                    {userData?.createdAt?.toDate().toLocaleDateString()}
                  </Th>
                  <Th isNumeric>
                    <Button colorScheme="teal" variant="solid">
                      Save
                    </Button>{" "}
                  </Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>

          <TableContainer
            border={"1px solid gray"}
            shadow={"md"}
            borderRadius={10}
          >
            <Table size={"lg"} variant="simple">
              <Thead>
                <Tr>
                  <Th colSpan={3}>Profile</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Phone Number</Td>
                  <Td>{userData?.contact.phoneNumber || "-"}</Td>
                  <Td isNumeric>
                    <Button colorScheme="teal" variant="link">
                      Change
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Premiere Adresse</Td>
                  <Td>{userData?.contact.address1 || ""}</Td>
                  <Td isNumeric>
                    <Button colorScheme="teal" variant="link">
                      Change
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Deuxieme Adresse</Td>
                  <Td>{userData?.contact.address2 || ""}</Td>
                  <Td isNumeric>
                    <Button colorScheme="teal" variant="link">
                      Change
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Pays</Td>
                  <Td>{userData?.contact.country || ""}</Td>
                  <Td isNumeric>
                    <Button colorScheme="teal" variant="link">
                      Change
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Ville</Td>
                  <Td>{userData?.contact.city || ""}</Td>
                  <Td isNumeric>
                    <Button colorScheme="teal" variant="link">
                      Change
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Code Postal</Td>
                  <Td>{userData?.contact.postalCode || ""}</Td>
                  <Td isNumeric>
                    <Button colorScheme="teal" variant="link">
                      Change
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th colSpan={2}>
                    Infomations are required for passing an order
                  </Th>
                  <Th isNumeric>
                    <Button colorScheme="teal" variant="solid">
                      Save
                    </Button>{" "}
                  </Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Stack>
      </Container>
    </Box>
  );
};

export default UserProfile;
