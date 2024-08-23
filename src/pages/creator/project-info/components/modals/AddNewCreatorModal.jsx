import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import BuidlIcon from "../../../../../assets/icons/buidl-icon.svg";
import TeamMemberIcon from "../../../../../assets/icons/team-member.svg";
import MediumSolidButton from "../../../../../components/ui/buttons/MediumSolidButton";
import AwesomeTick from "../../../../../components/svg-components/AwesomeTick";
import AddNewTeamOffCanvas from "../offcanvas/AddNewTeamOffCanvas";

const AddNewCreatorModal = ({ toggled, setToggled }) => {
  const [show, setShow] = useState(false);

  const [buidlTalentChecked, setBuidlTalentChecked] = useState(false);
  const [addTeamChecked, setAddTeamChecked] = useState(false);

  const handleCloseModal = () => {
    setToggled(false);
    setBuidlTalentChecked(false);
    setAddTeamChecked(false);
  };

  const handleSelectOption = (id) => {
    if (id === 1) {
      setBuidlTalentChecked(true);
      setAddTeamChecked(false);
    } else if (id === 2) {
      setBuidlTalentChecked(false);
      setAddTeamChecked(true);
    }
  };

  const handleProceed = () => {
    if (addTeamChecked) {
      handleCloseModal();
      setShow(true);
    }
  };

  const handleClose = () => setShow(false);

  const select = [
    {
      id: 1,
      icon: <BuidlIcon />,
      type: "Buidl Talent",
      awesomeTickIcon: <AwesomeTick checked={buidlTalentChecked} />,
    },
    {
      id: 2,
      icon: <TeamMemberIcon />,
      type: "Team Member",
      awesomeTickIcon: <AwesomeTick checked={addTeamChecked} />,
    },
  ];

  const divStyles = {
    padding: "2rem 1rem",
    cursor: "pointer",
    background: "#222532",
    border: "1.2px solid #3F4561",
    borderRadius: "14px",
  };

  return (
    <>
      <AddNewTeamOffCanvas show={show} handleClose={handleClose} />
      <Modal show={toggled} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Creator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="pb-3 ">
            <p className="normalPTag fw-medium">
              Select who you want to be hired as
            </p>
            <div className="d-flex flex-column gap-3">
              {select.map(({ id, icon, type, awesomeTickIcon }) => {
                return (
                  <div
                    key={id}
                    style={divStyles}
                    className="position-relative"
                    onClick={() => handleSelectOption(id)}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div>{icon}</div>
                      <span className="useAppYellow mt-0 fs-4 fw-bold">
                        {type}
                      </span>
                    </div>
                    <div className="position-absolute end-0 top-0">
                      {awesomeTickIcon}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <MediumSolidButton
            disabled={!buidlTalentChecked && !addTeamChecked}
            type="button"
            text="Proceed"
            style={{
              marginTop: "0rem",
              width: "100%",
            }}
            onClick={handleProceed}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddNewCreatorModal;
