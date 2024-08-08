import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";

const ChangeFullNameModal = ({ isOpen, onClose, onSave, currentFullName }) => {
  const [newFullName, setNewFullName] = useState(currentFullName);

  const handleSave = () => {
    if (newFullName.trim() === "") {
      // Optionally, show an error message or feedback
      return;
    }
    onSave(newFullName);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Changer Le Nom Complet</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            value={newFullName}
            onChange={(e) => setNewFullName(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={handleSave}
            isDisabled={newFullName.trim() === "" || newFullName === "-"}
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

export default ChangeFullNameModal;
