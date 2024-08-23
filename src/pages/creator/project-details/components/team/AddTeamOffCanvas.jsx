// import { useState } from "react";
// import useInput from "react-lite-input";
import { Offcanvas } from "react-bootstrap";
import InputLabel from "../../../../../components/ui/inputs/LabelInput";
import LabelSelect from "../../../../../components/ui/selects/LabelSelect";
import LabelTextarea from "../../../../../components/ui/textareas/LabelTextarea";
import MediumSolidButton from "../../../../../components/ui/buttons/MediumSolidButton";

const AddTeamOffCanvas = ({
  handleAddTeam,
  nameValue,
  emailValue,
  roleValue,
  descriptionValue,
  selectRole,
  handleLiteChange,
  show,
  handleClose,
}) => {
  // const initialValue = {
  //   name: "",
  //   email: "",
  //   role: "",
  //   description: "",
  // };

  // const { values, handleLiteChange } = useInput(initialValue);

  // const selectRole = [
  //   { value: "", label: "Select Role" },
  //   { value: "frontend developer", label: "Frontend Developer" },
  //   { value: "backend developer", label: "Backend Developer" },
  //   { value: "product designer", label: "Product Designer" },
  // ];

  // const handleAddTeam = () => {
  //   console.log(values);
  //   clearState();
  // };

  // const clearState = () => {
  //   values.name = "";
  //   values.email = "";
  //   values.role = "";
  //   values.description = "";
  // };

  const offCanvasStyles = {
    backgroundColor: "#272A38",
  };
  const inputStyles = {
    marginTop: "-1.2rem",
  };
  const btnStyles = {
    marginTop: "0rem",
    width: "6rem",
  };

  return (
    <Offcanvas
      placement="end"
      style={offCanvasStyles}
      show={show}
      onHide={handleClose}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <h5 className="useAppWhite mb-0">Applicant Details</h5>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="d-flex flex-column gap-4">
          <p className="normalPTag fw-medium mb-0">
            Enter details to invite external member. They will receive an
            invitation to join.
          </p>
          <div style={inputStyles}>
            <InputLabel
              label="Name"
              id="name"
              name="name"
              type="text"
              required={true}
              placeholder="Enter name"
              value={nameValue}
              onChange={handleLiteChange}
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
              value={emailValue}
              onChange={handleLiteChange}
            />
          </div>
          <LabelSelect
            label="Role"
            id="role"
            name="role"
            options={selectRole}
            value={roleValue}
            onChange={handleLiteChange}
          />
          <LabelTextarea
            name="description"
            label="Job Description"
            value={descriptionValue}
            onChange={handleLiteChange}
            id="jobDescription"
            placeholder="Enter job description"
            rows={3}
          />
          <MediumSolidButton
            type="button"
            text="Save"
            style={btnStyles}
            onClick={handleAddTeam}
          />
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default AddTeamOffCanvas;
