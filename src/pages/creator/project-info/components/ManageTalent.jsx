import { useState } from "react";
import { Dropdown, Image } from "react-bootstrap";
import images from "../../../../constants/images";
import ActionIcon from "../../../../assets/icons/action-icon.svg";
import MediumSolidButton from "../../../../components/ui/buttons/MediumSolidButton";
import AddNewCreatorModal from "./modals/AddNewCreatorModal";
import RemoveCreatorModal from "./modals/RemoveCreatorModal";
import WriteReviewOffCanvas from "./offcanvas/WriteReviewOffCanvas";
import SendReviewModal from "./modals/SendReviewModal";

const ManageTalent = () => {
  const [toggled, setToggled] = useState(false);
  const [removeCreatorToggled, setRemoveCreatorToggled] = useState(false);
  const [sendReviewToggled, setSendReviewToggled] = useState(false);
  const [show, setShow] = useState(false);

  const handleToggled = () => {
    setToggled(!toggled);
  };

  const handleRemoveCreatorToggled = () => {
    setRemoveCreatorToggled(!removeCreatorToggled);
  };

  const handleSendReviewToggled = () => {
    setSendReviewToggled(!sendReviewToggled);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleYes = () => {
    setSendReviewToggled(false);
    setShow(false);
  };

  const buttonStyles = {
    width: "12rem",
    margin: "0",
  };

  const divStyles = {
    background: "#232634",
    borderTop: "1px solid #3F4561",
  };

  return (
    <>
      <div className="p-4 px-md-5">
        <MediumSolidButton
          type="button"
          text="+ Add New Creator"
          style={buttonStyles}
          onClick={handleToggled}
        />
      </div>
      <div className="d-flex flex-column">
        {talents.map(({ id, imageSrc, name, role, type, dateAdded }) => {
          return (
            <div style={divStyles} key={id} className="py-2 px-4 px-md-5">
              <div className="d-flex justify-content-between align-items-center">
                <span className="d-md-block">
                  <Image src={imageSrc} width={50} />
                </span>
                <span className="normalPTag d-none d-md-block fw-medium">
                  {name}
                </span>
                <span className="normalPTag fw-medium d-none d-md-block">
                  {role}
                </span>
                <span className="normalPTag fw-medium">{type}</span>
                <span className="normalPTag fw-medium d-none d-md-block">
                  {dateAdded}
                </span>
                <div>
                  <Dropdown align={"end"}>
                    <Dropdown.Toggle
                      as={"button"}
                      className="bg-transparent border-0"
                      variant="success"
                      id="dropdown-basic"
                    >
                      <ActionIcon />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        as="span"
                        className="useAppCursor fw-medium"
                        onClick={handleRemoveCreatorToggled}
                      >
                        Remove
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        as="span"
                        className="useAppCursor fw-medium"
                        onClick={handleShow}
                      >
                        Settle Talent
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <AddNewCreatorModal toggled={toggled} setToggled={setToggled} />
      <RemoveCreatorModal
        removeCreatorToggled={removeCreatorToggled}
        setRemoveCreatorToggled={setRemoveCreatorToggled}
      />
      <WriteReviewOffCanvas
        show={show}
        handleClose={handleClose}
        handleSendReviewToggled={handleSendReviewToggled}
      />
      <SendReviewModal
        sendReviewToggled={sendReviewToggled}
        handleSendReviewToggled={handleSendReviewToggled}
        handleYes={handleYes}
      />
    </>
  );
};

const talents = [
  {
    id: 1,
    imageSrc: images.charlesImage.src,
    name: "Charles Edwin",
    role: "Frontend Developer",
    type: "Buidl Talent",
    dateAdded: "04 May, 2025",
  },
  {
    id: 2,
    imageSrc: images.jamesImage.src,
    name: "Charles Edwin",
    role: "Frontend Developer",
    type: "Team Member",
    dateAdded: "04 May, 2025",
  },
  {
    id: 3,
    imageSrc: images.charlesImage.src,
    name: "Charles Edwin",
    role: "Frontend Developer",
    type: "Buidl Talent",
    dateAdded: "04 May, 2025",
  },
];

export default ManageTalent;
