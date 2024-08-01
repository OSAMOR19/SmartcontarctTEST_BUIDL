import React from "react";
import { Form, FormControl, InputGroup, Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import images from "../../constants/images";

const SearchModal = ({ show, handleClose }) => {
  const inputStyles = {
    backgroundColor: "#404354",
    color: "#C8C8C8",
    borderColor: "#404354",
    outline: "none",
    borderRadius: 2 + "rem",
  };

  return (
    <Modal
      style={{ backgroundColor: "rgba(69, 75, 101, 0.6)" }}
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title style={{ color: "#ffffff", fontSize: "0.9rem" }}>
          Search and Ai
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ color: "#999999", fontSize: "0.8rem" }}>
          We have multi Ai tools click on any one to use or search
        </p>
        <div style={{ gap: 6 }} className="d-flex">
          <Form style={{ width: 100 + "%" }}>
            <InputGroup size="lg">
              <FormControl
                style={inputStyles}
                type="text"
                placeholder="Search"
                className="w-100 shadow-none"
              />
            </InputGroup>
          </Form>
          <div>
            <Image
              src={images.gptLogo.src}
              alt={images.gptLogo.alt}
              width={34}
            />
          </div>
        </div>
        <br />
      </Modal.Body>
    </Modal>
  );
};

export default SearchModal;
