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

const ChangeAddressModal = ({
  isOpen,
  onClose,
  onSave,
  currentAddress,
  addressType,
}) => {
  const [newAddress, setNewAddress] = useState(currentAddress);

  const handleSave = () => {
    if (newAddress.trim() === "") {
      // Optionally, show an error message or feedback
      return;
    }
    onSave(newAddress);
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
        <ModalHeader>Modifier La {addressType}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
          />
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={handleSave}
            isDisabled={newAddress.trim() === "" || newAddress === "-"}
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

export default ChangeAddressModal;
