import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import InputLabel from "../../../../../components/ui/inputs/LabelInput";
import MediumSolidButton from "../../../../../components/ui/buttons/MediumSolidButton";
import LabelSelect from "../../../../../components/ui/selects/LabelSelect";
import LabelTextarea from "../../../../../components/ui/textareas/LabelTextarea";

const ProjectModal = ({
  toggled,
  setToggled,
  handleAddTeamMember,
  editMember,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editMember) {
      setName(editMember.name);
      setEmail(editMember.email);
      setRole(editMember.role);
      setDescription(editMember.description);
    } else {
      clearForm();
    }
  }, [editMember]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSelectChange = (e) => {
    setRole(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleClose = () => {
    setToggled(false);
    clearForm();
  };

  const handleSave = () => {
    const newMember = { name, email, role, description };
    handleAddTeamMember(newMember);
    clearForm();
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setRole("");
    setDescription("");
  };

  const selectRole = [
    { value: "", label: "Select Role" },
    { value: "Frontend developer", label: "Frontend Developer" },
    { value: "Backend developer", label: "Backend Developer" },
    { value: "Product designer", label: "Product Designer" },
  ];

  return (
    <Modal
      show={toggled}
      onHide={handleClose}
      centered
      className="modalBgColor"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {editMember ? "Edit Team Member" : "Add Team Member"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="normalPTag">
          Woohoo, you are reading this text in a modal! Woohoo, you are reading
          this text in a modal! Woohoo.
        </p>
        <div className="d-flex flex-column gap-2">
          <div
            style={{
              marginTop: "-1.2rem",
            }}
          >
            <InputLabel
              label="Name"
              id="name"
              name="name"
              type="text"
              required={true}
              placeholder="Enter name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div
            style={{
              marginTop: "-1.2rem",
            }}
          >
            <InputLabel
              label="Email"
              id="email"
              name="email"
              type="email"
              required={true}
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <LabelSelect
            label="Role"
            id="role"
            name="role"
            options={selectRole}
            value={role}
            onChange={handleSelectChange}
          />
          <LabelTextarea
            label="Job Description"
            value={description}
            onChange={handleDescriptionChange}
            id="jobDescription"
            placeholder="Enter job description"
            rows={3}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <MediumSolidButton
          disabled={!name || !email || !role}
          type="button"
          text="Save"
          style={{
            marginTop: "0rem",
            width: "6rem",
          }}
          onClick={handleSave}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
