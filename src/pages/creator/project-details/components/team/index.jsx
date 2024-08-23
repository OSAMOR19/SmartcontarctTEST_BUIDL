import { useState } from "react";
import { Col, Button } from "react-bootstrap";
import useInput from "react-lite-input";
import Opening from "./Opening";
import AddTeamOffCanvas from "./AddTeamOffCanvas";
import { useDispatch } from "react-redux";
import { addNewTeam } from "../../../../../store/projects/reducer";

const Team = ({ project }) => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const initialValue = {
    name: "",
    email: "",
    role: "",
    description: "",
  };

  const { values, handleLiteChange } = useInput(initialValue);

  const selectRole = [
    { value: "", label: "Select Role" },
    { value: "frontend developer", label: "Frontend Developer" },
    { value: "backend developer", label: "Backend Developer" },
    { value: "product designer", label: "Product Designer" },
  ];

  const handleAddTeam = () => {
    const newTeamData = {
      projectId: project.id,
      ...values,
    };
    dispatch(addNewTeam(newTeamData));
    // console.log(values);
    clearState();
    setShow(false);
  };

  const clearState = () => {
    values.name = "";
    values.email = "";
    values.role = "";
    values.description = "";
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cardBody = {
    backgroundColor: "#272A38",
    borderRadius: 14 + "px",
  };
  const cardHeader = {
    borderBottom: "1px solid #565F87",
  };

  return (
    <>
      <Col lg={4}>
        <div style={cardBody}>
          <div
            className="p-3 d-flex justify-content-between align-items-center"
            style={cardHeader}
          >
            <h4 className="useAppWhite fs-5">Teams</h4>
            <div className="d-flex align-items-center gap-2 ">
              <Button type="button" className="extraSolidButton">
                Opening
              </Button>
              <Button
                type="button"
                className="extraOutlinedButton"
                onClick={handleShow}
              >
                * Add Team
              </Button>
              <Button type="button" className="extraOutlinedButton">
                Hire Builders
              </Button>
            </div>
          </div>
          <div className="p-3">
            <Opening project={project} />
          </div>
        </div>
      </Col>
      <AddTeamOffCanvas
        nameValue={values.name}
        emailValue={values.email}
        roleValue={values.role}
        descriptionValue={values.description}
        handleLiteChange={handleLiteChange}
        handleAddTeam={handleAddTeam}
        selectRole={selectRole}
        show={show}
        handleClose={handleClose}
      />
    </>
  );
};

export default Team;
