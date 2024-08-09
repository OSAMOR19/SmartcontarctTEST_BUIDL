import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LineProgressThree from "../../../../assets/icons/line-progress3.svg";
import MediumSolidButton from "../../../../components/ui/buttons/MediumSolidButton";
import MediumOutlineButton from "../../../../components/ui/buttons/MediumOutlineButton";
import EditIcon from "../../../../assets/icons/edit-icon.svg";
import DeleteIcon from "../../../../assets/icons/delete-icon.svg";
import ProjectModal from "./modals/ProjectModal";
import { selectProject } from "../../../../store/projects/reducer";
import { useSelector } from "react-redux";
import Spinners from "./atoms/Spinners";
import Success from "./atoms/Success";
import Checkbox from "./ui/Checkbox";
import CustomRequired from "./ui/CustomRequired";

const ProjectFinalize = ({
  onPrev,
  onNext,
  handleCreateProject,
  team,
  setTeam,
}) => {
  const [toggled, setToggled] = useState(false);

  const [editIndex, setEditIndex] = useState(null);

  const [addTeamChecked, setAddTeamChecked] = useState(false);
  const [hireBuidlTalentsChecked, setHireBuidlTalentsChecked] = useState(false);

  const handleToggled = () => {
    setToggled(!toggled);
  };

  const handleAddTeamMember = (member) => {
    if (editIndex !== null) {
      const updatedTeam = [...team];
      updatedTeam[editIndex] = member;
      setTeam(updatedTeam);
      setEditIndex(null);
    } else {
      setTeam([...team, member]);
    }
    setToggled(false);
  };

  const handleEditMember = (index) => {
    setEditIndex(index);
    setToggled(true);
  };

  const handleDeleteMember = (index) => {
    setTeam(team.filter((_, i) => i !== index));
  };

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    if (id === "addTeam") {
      setHireBuidlTalentsChecked(false);
      setAddTeamChecked(checked);
    } else if (id === "hireBuidlTalents") {
      setAddTeamChecked(false);
      setHireBuidlTalentsChecked(checked);
    }
  };

  const { requestStatus } = useSelector(selectProject);

  if (requestStatus === "loading") {
    return <Spinners />;
  }

  if (requestStatus === "createSuccessFull") {
    return <Success />;
  }

  const bodyStyles = {
    paddingBottom: "5rem",
  };

  const colStyles = {
    background: "#272A38",
    padding: "1rem",
    paddingBottom: "10rem",
    borderRadius: 14 + "px",
  };

  return (
    <Container style={bodyStyles}>
      <Col style={colStyles}>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div style={{ width: 100 + "%" }} className="centerForm">
            <Row className="w-100">
              <Col xs={12} sm={12} md={12} lg={12}>
                <div>
                  <h2 className="strongH2Tag">Project Details</h2>
                  <p className="normalPTag">
                    Invite your team or hire directly from the Buidl Job
                    Marketplace — it's your choice
                  </p>
                  <LineProgressThree />
                </div>
              </Col>
            </Row>

            <div className="pt-4">
              <CustomRequired text="How Would You Like to Build ?" />
              <div className="createProjectCheckbox d-flex gap-4 pt-2">
                <Checkbox
                  checkBoxLabel="Add Team"
                  id="addTeam"
                  checked={addTeamChecked}
                  onChange={handleCheckboxChange}
                />
                <Checkbox
                  id="hireBuidlTalents"
                  checkBoxLabel="Hire Buidl Talents"
                  checked={hireBuidlTalentsChecked}
                  onChange={handleCheckboxChange}
                />
              </div>
            </div>

            {addTeamChecked && (
              <div className="pt-4">
                <MediumOutlineButton
                  type="button"
                  text="* Add Team"
                  style={{
                    marginTop: "0rem",
                    width: "8rem",
                  }}
                  onClick={handleToggled}
                />
              </div>
            )}

            {hireBuidlTalentsChecked && (
              <div className="pt-3">
                <h4 className="normalPTag fw-medium">
                  This project is made known to project managers on the platform
                  for application
                </h4>
              </div>
            )}

            <div>
              <ProjectModal
                toggled={toggled}
                setToggled={setToggled}
                handleAddTeamMember={handleAddTeamMember}
                editMember={editIndex !== null ? team[editIndex] : null}
              />
            </div>

            {addTeamChecked && (
              <div className="pt-4">
                {team.map(({ name, role, description }, index) => (
                  <div key={index}>
                    <div
                      style={{ color: "#FFFFFF" }}
                      className="d-flex justify-content-between"
                    >
                      <div>
                        <h3>{name}</h3>
                        <p className="normalPTag fw-semibold mb-2">{role}</p>
                      </div>
                      <div>
                        <span
                          style={{
                            cursor: "pointer",
                          }}
                          className="pe-2"
                          onClick={() => handleEditMember(index)}
                        >
                          <EditIcon />
                        </span>
                        <span
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={() => handleDeleteMember(index)}
                        >
                          <DeleteIcon />
                        </span>
                      </div>
                    </div>
                    <p className="normalPTag">{description}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="stepsTouch d-flex pt-5 align-items-center flex-wrap justify-content-between">
              <div className="d-flex gap-3">
                <MediumOutlineButton
                  type="button"
                  text="Previous"
                  style={{
                    marginTop: "0rem",
                    width: "6rem",
                  }}
                  onClick={onPrev}
                />
                <div>
                  {addTeamChecked && (
                    <MediumSolidButton
                      disabled={!team.length}
                      type="button"
                      text="Done"
                      style={{
                        marginTop: "0rem",
                        width: "6rem",
                      }}
                      onClick={handleCreateProject}
                    />
                  )}
                  {hireBuidlTalentsChecked && (
                    <MediumSolidButton
                      type="button"
                      text="Proceed"
                      style={{
                        marginTop: "0rem",
                        width: "6rem",
                      }}
                      onClick={onNext}
                    />
                  )}
                </div>
              </div>
              <span
                className="normalPTag fw-medium"
                style={{
                  color: "#EEA20E",
                  cursor: "pointer",
                }}
              >
                Save & Continue later
              </span>
            </div>
          </div>
        </div>
      </Col>
    </Container>
  );
};

export default ProjectFinalize;
