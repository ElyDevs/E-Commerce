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

const ChangePostalCodeModal = ({
  isOpen,
  onClose,
  onSave,
  currentPostalCode,
}) => {
  const [newPostalCode, setNewPostalCode] = useState(currentPostalCode);

  const handleSave = () => {
    if (newPostalCode.trim() === "") {
      // Optionally, show an error message or feedback
      return;
    }
    onSave(newPostalCode);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modifier Le Code Postal</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            value={newPostalCode}
            onChange={(e) => setNewPostalCode(e.target.value)}
          />
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={handleSave}
            isDisabled={newPostalCode.trim() === "" || newPostalCode === "-"}
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

export default ChangePostalCodeModal;
