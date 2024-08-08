import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

const ChangeCityModal = ({ isOpen, onClose, onSave, currentCity }) => {
  const [newCity, setNewCity] = useState(currentCity);

  const handleSave = () => {
    if (newCity.trim() === "") {
      // Optionally, show an error message or feedback
      return;
    }
    onSave(newCity);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Change City</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input value={newCity} onChange={(e) => setNewCity(e.target.value)} />
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={handleSave}
            isDisabled={newCity.trim() === "" || newCity === "-"}
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
