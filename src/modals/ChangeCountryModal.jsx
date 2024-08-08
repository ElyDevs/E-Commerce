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
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";

const ChangeCountryModal = ({ isOpen, onClose, onSave, currentCountry }) => {
  const [newCountry, setNewCountry] = useState(currentCountry);

  const handleSave = () => {
    if (newCountry.trim() === "") {
      // Optionally, show an error message or feedback
      return;
    }
    onSave(newCountry);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modifier Le Pays</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            isDisabled
            value={"Tunisie"}
            // value={newCountry}
            onChange={(e) => setNewCountry(e.target.value)}
          />
        </ModalBody>

        <ModalFooter>
          <Tooltip
            hasArrow
            label={"Livraison Exclusivement En Tunisie Pour Le Moment"}
          >
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleSave}
              isDisabled
              // isDisabled={newCountry.trim() === "" || newCountry === "-"}
            >
              Sauvegarder
            </Button>
          </Tooltip>
          <Button variant="ghost" onClick={onClose}>
            Annuler
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ChangeCountryModal;
