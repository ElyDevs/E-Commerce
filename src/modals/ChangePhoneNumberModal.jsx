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

const ChangePhoneNumberModal = ({
  isOpen,
  onClose,
  onSave,
  currentPhoneNumber,
}) => {
  const [newPhoneNumber, setNewPhoneNumber] = useState(currentPhoneNumber);

  const handleSave = () => {
    if (newPhoneNumber.trim() === "") {
      // Optionally, show an error message or feedback
      return;
    }
    onSave(newPhoneNumber);
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
        <ModalHeader>Change Phone Number</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            value={newPhoneNumber}
            onChange={(e) => setNewPhoneNumber(e.target.value)}
          />
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={handleSave}
            isDisabled={newPhoneNumber.trim() === "" || newPhoneNumber === "-"}
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

export default ChangePhoneNumberModal;
