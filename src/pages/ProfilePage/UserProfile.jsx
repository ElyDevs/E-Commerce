import {
  Box,
  Button,
  Container,
  Flex,
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
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/Firebase";
import LoadingUserProfile from "./LoadingUserProfile";
import ChangeFullNameModal from "../../modals/ChangeFullNameModal";
import ChangePhoneNumberModal from "../../modals/ChangePhoneNumberModal";
import ChangeAddressModal from "../../modals/ChangeAddressModal";
import ChangeCountryModal from "../../modals/ChangeCountryModal";
import ChangeCityModal from "../../modals/ChangeCityModal";
import ChangePostalCodeModal from "../../modals/ChangePostalCodeModal";

const UserProfile = () => {
  const { currentUser } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const [modalType, setModalType] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  const handleSave = async (field, value) => {
    try {
      const userDocRef = doc(db, "users", currentUser.uid);
      await updateDoc(userDocRef, { [field]: value });

      // Update the local state with a new object reference
      setUserData((prevData) => {
        // Create a new object with updated field value
        const updatedData = { ...prevData };
        if (field.startsWith("contact.")) {
          const contactField = field.split(".")[1];
          updatedData.contact = {
            ...updatedData.contact,
            [contactField]: value,
          };
        } else {
          updatedData[field] = value;
        }
        return updatedData;
      });
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const isInformationMissing = () => {
    return (
      userData?.fullName === "-" ||
      userData?.contact?.phoneNumber === "-" ||
      userData?.contact?.address1 === "-" ||
      userData?.contact?.country === "-" ||
      userData?.contact?.city === "-" ||
      userData?.contact?.postalCode === "-"
    );
  };

  if (loading) {
    return <LoadingUserProfile />;
  }

  return (
    <Box>
      <Box>
        {modalType === "fullName" && (
          <ChangeFullNameModal
            isOpen={isOpen}
            onClose={onClose}
            onSave={(newFullName) => handleSave("fullName", newFullName)}
            currentFullName={userData?.fullName || ""}
          />
        )}
        {modalType === "phoneNumber" && (
          <ChangePhoneNumberModal
            isOpen={isOpen}
            onClose={onClose}
            onSave={(newPhoneNumber) =>
              handleSave("contact.phoneNumber", newPhoneNumber)
            }
            currentPhoneNumber={userData?.contact.phoneNumber || ""}
          />
        )}
        {modalType === "address1" && (
          <ChangeAddressModal
            isOpen={isOpen}
            onClose={onClose}
            onSave={(newAddress) => handleSave("contact.address1", newAddress)}
            currentAddress={userData?.contact.address1 || ""}
            addressType="Premiere Adresse"
          />
        )}
        {modalType === "address2" && (
          <ChangeAddressModal
            isOpen={isOpen}
            onClose={onClose}
            onSave={(newAddress) => handleSave("contact.address2", newAddress)}
            currentAddress={userData?.contact.address2 || ""}
            addressType="Deuxieme Adresse"
          />
        )}
        {modalType === "country" && (
          <ChangeCountryModal
            isOpen={isOpen}
            onClose={onClose}
            onSave={(newCountry) => handleSave("contact.country", newCountry)}
            currentCountry={userData?.contact.country || ""}
          />
        )}
        {modalType === "city" && (
          <ChangeCityModal
            isOpen={isOpen}
            onClose={onClose}
            onSave={(newCity) => handleSave("contact.city", newCity)}
            currentCity={userData?.contact.city || ""}
          />
        )}
        {modalType === "postalCode" && (
          <ChangePostalCodeModal
            isOpen={isOpen}
            onClose={onClose}
            onSave={(newPostalCode) =>
              handleSave("contact.postalCode", newPostalCode)
            }
            currentPostalCode={userData?.contact.postalCode || ""}
          />
        )}
      </Box>
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
                  <Th colSpan={3}>Profil</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>E-Mail</Td>
                  <Td>{userData?.email || ""}</Td>
                </Tr>
                <Tr>
                  <Td>Mot De Passe</Td>
                  <Td>••••••••••••</Td>
                </Tr>
                <Tr>
                  <Td>Date D'insciption</Td>
                  <Td> {userData?.createdAt?.toDate().toLocaleDateString()}</Td>
                </Tr>
              </Tbody>
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
                  <Td>Nom Complet</Td>
                  <Td>{userData?.fullName || ""}</Td>
                  <Td isNumeric>
                    <Button
                      colorScheme="teal"
                      variant="link"
                      onClick={() => {
                        setModalType("fullName");
                        onOpen();
                      }}
                    >
                      Modifier
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Numéro De Téléphone</Td>
                  <Td>{userData?.contact.phoneNumber || "-"}</Td>
                  <Td isNumeric>
                    <Button
                      colorScheme="teal"
                      variant="link"
                      onClick={() => {
                        setModalType("phoneNumber");
                        onOpen();
                      }}
                    >
                      Modifier
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Première Adresse</Td>
                  <Td>{userData?.contact.address1 || ""}</Td>
                  <Td isNumeric>
                    <Button
                      colorScheme="teal"
                      variant="link"
                      onClick={() => {
                        setModalType("address1");
                        onOpen();
                      }}
                    >
                      Modifier
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Deuxième Adresse</Td>
                  <Td>{userData?.contact.address2 || ""}</Td>
                  <Td isNumeric>
                    <Button
                      colorScheme="teal"
                      variant="link"
                      onClick={() => {
                        setModalType("address2");
                        onOpen();
                      }}
                    >
                      Modifier
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Pays</Td>
                  <Td>{userData?.contact.country || ""}</Td>
                  <Td isNumeric>
                    <Button
                      colorScheme="teal"
                      variant="link"
                      onClick={() => {
                        setModalType("country");
                        onOpen();
                      }}
                    >
                      Modifier
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Ville</Td>
                  <Td>{userData?.contact.city || ""}</Td>
                  <Td isNumeric>
                    <Button
                      colorScheme="teal"
                      variant="link"
                      onClick={() => {
                        setModalType("city");
                        onOpen();
                      }}
                    >
                      Modifier
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Code Postal</Td>
                  <Td>{userData?.contact.postalCode || ""}</Td>
                  <Td isNumeric>
                    <Button
                      colorScheme="teal"
                      variant="link"
                      onClick={() => {
                        setModalType("postalCode");
                        onOpen();
                      }}
                    >
                      Modifier
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
              <Tfoot>
                {isInformationMissing() ? (
                  <Tr>
                    <Td colSpan={3} color={"tomato"}>
                      Complétez vos informations pour passer des commandes.
                    </Td>
                  </Tr>
                ) : (
                  <>
                    <Td colSpan={3} color={"green.500"}>
                      <Flex
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Text>
                          Votre profil est complet!
                          <br />
                          Vous pouvez maintenant passer des commandes.
                        </Text>
                        <Button colorScheme="teal" variant="solid">
                          Commander
                        </Button>
                      </Flex>
                    </Td>
                  </>
                )}
              </Tfoot>
            </Table>
          </TableContainer>
        </Stack>
      </Container>
    </Box>
  );
};

export default UserProfile;
