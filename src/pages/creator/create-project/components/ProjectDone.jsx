import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import LineProgressThree from "../../../../assets/icons/line-progress3.svg";
import MediumSolidButton from "../../../../components/ui/buttons/MediumSolidButton";
import MediumOutlineButton from "../../../../components/ui/buttons/MediumOutlineButton";
import EditIcon from "../../../../assets/icons/edit-icon.svg";
import DeleteIcon from "../../../../assets/icons/delete-icon.svg";
import AddTeamModal from "./project-done/AddTeamModal";
import { selectProject } from "../../../../store/projects/reducer";
import { useSelector } from "react-redux";
import Spinners from "./atoms/Spinners";
import Success from "./atoms/Success";

const ProjectDone = ({
  onPrev,
  nameValue,
  handleNameValueChange,
  selectedOption,
  handleSelectedOptionChange,
  textAreaValue,
  handleTextAreaValueChange,
  handleCreateProject,
}) => {
  const [toggled, setToggled] = useState(false);

  const [addTeamChecked, setAddTeamChecked] = useState(false);
  const [hireBuidlTalentsChecked, setHireBuidlTalentsChecked] = useState(false);

  const handleToggled = () => {
    setToggled(!toggled);
  };

  const { requestStatus } = useSelector(selectProject);

  if (requestStatus === "loading") {
    return <Spinners />;
  }

  if (requestStatus === "createSuccessFull") {
    return <Success />;
  }

  // const handleAddTeamCheckedChange = (e) => {
  //   if (e.target.checked) {
  //     setHireBuidlTalentsChecked(false);
  //   }
  //   setAddTeamChecked(e.target.checked);
  // };

  // const handleHireBuidlTalentsCheckedChange = (e) => {
  //   if (e.target.checked) {
  //     setAddTeamChecked(false);
  //   }
  //   setHireBuidlTalentsChecked(e.target.checked);
  // };

  const divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const nextContinue = {
    display: "flex",
    paddingTop: "3rem",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };

  return (
    <Container
      style={{
        paddingTop: "7rem",
        paddingBottom: "5rem",
      }}
    >
      <Col
        style={{
          background: "#272A38",
          padding: "1rem",
          paddingBottom: "10rem",
          borderRadius: 14 + "px",
        }}
      >
        <div style={divStyle}>
          <div style={{ width: 100 + "%" }} className="centerForm">
            <Row style={{ width: 100 + "%" }}>
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

            <div
              style={{
                paddingTop: "3rem",
              }}
            >
              <h4
                style={{
                  color: "#ffffff",
                  fontSize: "clamp(1rem, 1.8rem + 1.5vw, 1.3rem)",
                }}
              >
                How Would You Like to Build ?
              </h4>
              <div
                className="myStyleCheckbox"
                style={{
                  display: "flex",
                  gap: "2rem",
                }}
              >
                <Form
                  style={{
                    opacity: "0.4",
                  }}
                >
                  <Form.Check
                    type={"checkbox"}
                    label={
                      <span
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        Add Team
                      </span>
                    }
                    // id={"addTeam"}
                    // onChange={handleAddTeamCheckedChange}
                    // checked={addTeamChecked}
                  />
                </Form>
                <Form
                  style={{
                    opacity: "0.4",
                  }}
                >
                  <Form.Check
                    type={"checkbox"}
                    label={
                      <span
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        Hire Buidl Talents
                      </span>
                    }
                    // id={"hireBuidlTalents"}
                    // onChange={handleHireBuidlTalentsCheckedChange}
                    // checked={hireBuidlTalentsChecked}
                  />
                </Form>
              </div>
            </div>

            {addTeamChecked && (
              <div
                style={{
                  paddingTop: "2rem",
                }}
              >
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
              <div
                style={{
                  paddingTop: "2rem",
                }}
              >
                <h4 className="normalPTag">
                  This project is made known to project managers on the platform
                  for application
                </h4>
              </div>
            )}

            <div>
              <AddTeamModal
                toggled={toggled}
                setToggled={setToggled}
                nameValue={nameValue}
                handleNameValueChange={handleNameValueChange}
                selectedOption={selectedOption}
                handleSelectChange={handleSelectedOptionChange}
                textAreaValue={textAreaValue}
                handleTextAreaValueChange={handleTextAreaValueChange}
              />
            </div>

            {/* <div
                  style={{
                    paddingTop: "2rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      color: "#FFFFFF",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <h3>Charles John</h3>
                      <p className="normalPTag">Product Designer</p>
                    </div>
                    <div>
                      <span
                        style={{
                          paddingInlineEnd: "0.5rem",
                        }}
                      >
                        <EditIcon />
                      </span>
                      <span>
                        <DeleteIcon />
                      </span>
                    </div>
                  </div>
                  <p className="normalPTag">
                    Woohoo, you are reading this text in a modal! Woohoo, you are
                    reading this text in a modal! Woohoo, you are reading this text
                    in a modal!
                  </p>
                </div> */}

            <div style={nextContinue} className="stepsTouch">
              <div
                className=""
                style={{
                  display: "flex",
                  gap: "1rem",
                }}
              >
                <MediumOutlineButton
                  type="button"
                  text="Previous"
                  style={{
                    marginTop: "0rem",
                    width: "6rem",
                  }}
                  onClick={onPrev}
                />
                <MediumSolidButton
                  type="button"
                  text="Done"
                  style={{
                    marginTop: "0rem",
                    width: "6rem",
                  }}
                  onClick={handleCreateProject}
                />
              </div>
              <span
                className="normalPTag"
                style={{
                  color: "#EEA20E",
                  fontWeight: "500",
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

export default ProjectDone;
