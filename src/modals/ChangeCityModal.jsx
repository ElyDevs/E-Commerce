import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";

// List of Tunisian cities
const tunisianCities = [
  "Tunis",
  "Sfax",
  "Sousse",
  "Kairouan",
  "Bizerte",
  "Medenine",
  "Gabès",
  "Sidi Bouzid",
  "Kasserine",
  "Nabeul",
  "Jendouba",
  "Siliana",
  "Zaghouan",
  "La Manouba",
  "Ariana",
  "Ben Arous",
  "Gafsa",
  "El Kef",
  "Tataouine",
  "Tozeur",
  "Kebili",
  "Béja",
  "Monastir",
  "Mahdia",
];

const ChangeCityModal = ({ isOpen, onClose, onSave, currentCity }) => {
  const [selectedCity, setSelectedCity] = useState(currentCity);

  const handleSave = () => {
    if (selectedCity.trim() === "") {
      // Optionally, show an error message or feedback
      return;
    }
    onSave(selectedCity);
    onClose();
  };

  return (
    <Modal
      size={{ base: "xs", sm: "sm", md: "md", lg: "lg", xl: "xl" }}
      isCentered
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Change City</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="" disabled>
              Select a city
            </option>
            {tunisianCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </Select>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={handleSave}
            isDisabled={selectedCity.trim() === ""}
          >
            Sauvegarder
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Annuler
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ChangeCityModal;
