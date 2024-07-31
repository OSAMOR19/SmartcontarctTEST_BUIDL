import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputLabel from "../../../../../components/ui/inputs/LabelInput";
import MediumSolidButton from "../../../../../components/ui/buttons/MediumSolidButton";

const AddTeamModal = ({
  toggled,
  setToggled,
  selectedOption,
  nameValue,
  handleSelectChange,
  handleNameValueChange,
  textAreaValue,
  handleTextAreaValueChange,
}) => {
  const handleClose = () => setToggled(false);

  const inputBody = {
    fontSize: "19px",
    color: "#C8C8C8",
    backgroundColor: "#404354",
    fontWeight: "500",
    borderColor: "#404354",
    outline: "none",
    boxShadow: "none",
  };

  const textAreaBody = {
    fontSize: "19px",
    color: "#C8C8C8",
    backgroundColor: "#404354",
    fontWeight: "500",
    border: "0",
    width: 100 + "%",
    padding: 1 + "rem",
    borderRadius: 8 + "px",
    outline: "none",
    boxShadow: "none",
  };

  const divStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 1 + "rem",
  };
  return (
    <div>
      <Modal show={toggled} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="normalPTag">
            Woohoo, you are reading this text in a modal! Woohoo, you are
            reading this text in a modal! Woohoo, you are reading this text in a
            modal!
          </p>
          <div style={divStyle}>
            <InputLabel
              label="Name"
              id="name"
              name="name"
              type="text"
              required={true}
              placeholder="Email Name"
              value={nameValue}
              onChange={handleNameValueChange}
            />
            <div>
              <label
                htmlFor="selects"
                className="normalPTag"
                style={{
                  fontWeight: "500",
                  paddingBottom: "0.5rem",
                }}
              >
                Role
              </label>
              <Form.Select
                name="selects"
                aria-label="Default select example"
                style={inputBody}
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option>Select Role</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Product Designer">Product Designer</option>
              </Form.Select>
            </div>
            <div>
              <label
                htmlFor="jobDescription"
                className="normalPTag"
                style={{
                  fontWeight: "500",
                  paddingBottom: "0.5rem",
                }}
              >
                Job Description{" "}
              </label>
              <textarea
                value={textAreaValue}
                onChange={handleTextAreaValueChange}
                style={textAreaBody}
                name="jobDescription"
                id="jobDescription"
                placeholder="Enter your job description"
                rows={5}
              ></textarea>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <MediumSolidButton
            onClick={handleClose}
            type="button"
            text="Save"
            style={{
              marginTop: "0rem",
              width: "6rem",
            }}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddTeamModal;
