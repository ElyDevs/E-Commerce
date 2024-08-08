import React from "react";

const LoadingUserProfile = () => {
  return (
    <div>
      {/* import {
  Box,
  Button,
  Container,
  Stack,
  Table,
  TableCaption,
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
import LoadingUserProfile from "./LoadingUserProfile";

const UserProfile = () => {
  const [loading, setLoading] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
    contact: {
      phoneNumber: "",
      address1: "",
      address2: "",
      country: "",
      city: "",
      postalCode: "",
    },
    createdAt: null,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        setLoading(true);
        try {
          const cachedData = localStorage.getItem("userData");
          if (cachedData) {
            console.log("slm");
            const parsedData = JSON.parse(cachedData);
            const userData = {
              ...parsedData,
              createdAt: parsedData.createdAt
                ? new Date(parsedData.createdAt)
                : null,
            };
            setUserData(userData);
            setLoading(false);
            return;
          }

          const docRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            const userData = {
              fullName: data.fullName || "",
              email: data.email || "",
              password: "••••••••••••",
              contact: data.contact || {
                phoneNumber: "",
                address1: "",
                address2: "",
                country: "",
                city: "",
                postalCode: "",
              },
              createdAt: data.createdAt
                ? data.createdAt.toDate().toISOString()
                : null,
            };
            localStorage.setItem("userData", JSON.stringify(userData));

            setUserData(userData);
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserData();
  }, [currentUser]);

  const formatDate = (date) => {
    if (!date) return "";
    return date.toLocaleDateString(); // Use toLocaleDateString or any date formatting function
  };

  if (loading) {
    return <LoadingUserProfile />;
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
                  <Td>{userData.fullName}</Td>
                  <Td isNumeric>
                    <Button colorScheme="teal" variant="link">
                      Change
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Email</Td>
                  <Td>{userData.email}</Td>
                  <Td isNumeric>
                    <Button colorScheme="teal" variant="link">
                      Change
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Password</Td>
                  <Td color={""}>••••••••••••</Td>
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
                    Member Since: {formatDate(userData.createdAt)}
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
                  <Th colSpan={3}>Informations</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Phone Number</Td>
                  <Td>{userData.contact.phoneNumber}</Td>
                  <Td isNumeric>
                    <Button colorScheme="teal" variant="link">
                      Change
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Premiere Adresse</Td>
                  <Td>{userData.contact.address1}</Td>
                  <Td isNumeric>
                    <Button colorScheme="teal" variant="link">
                      Change
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Deuxieme Adresse</Td>
                  <Td>{userData.contact.address2}</Td>
                  <Td isNumeric>
                    <Button colorScheme="teal" variant="link">
                      Change
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Pays</Td>
                  <Td>{userData.contact.country}</Td>
                  <Td isNumeric>
                    <Button colorScheme="teal" variant="link">
                      Change
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Ville</Td>
                  <Td>{userData.contact.city}</Td>
                  <Td isNumeric>
                    <Button colorScheme="teal" variant="link">
                      Change
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Code Postal</Td>
                  <Td>{userData.contact.postalCode}</Td>
                  <Td isNumeric>
                    <Button colorScheme="teal" variant="link">
                      Change
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th isNumeric colSpan={3}>
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

export default UserProfile; */}
    </div>
  );
};

export default LoadingUserProfile;
