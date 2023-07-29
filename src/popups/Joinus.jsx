import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import ContactForm from "../components/ContactForm";
import "./Joinus.css";

const Joinus = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Join Our NewsLetter</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}></ModalBody>
          <form className="form" style={{marginTop:"-25px"}}>
            <div className="formGroup newsletter_email_div">
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email address"
                required
              />
              <button type="submit" className="button">
                Send
              </button>
            </div>
          </form>
          <ModalFooter>
            {/* <Button onClick={onClose}>Cancel</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Joinus;
