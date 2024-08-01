import Modal from "react-bootstrap/Modal";
import InputLabel from "../../../../../components/ui/inputs/LabelInput";
import MediumSolidButton from "../../../../../components/ui/buttons/MediumSolidButton";
import LabelSelect from "../../../../../components/ui/selects/LabelSelect";
import LabelTextarea from "../../../../../components/ui/textareas/LabelTextarea";

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

  const selectRole = [
    { value: "", label: "Select Role" },
    { value: "frontend developer", label: "Frontend Developer" },
    { value: "backend developer", label: "Backend Developer" },
    { value: "product designer", label: "Product Designer" },
  ];

  return (
    <div>
      <Modal show={toggled} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="normalPTag">
            Woohoo, you are reading this text in a modal! Woohoo, you are
            reading this text in a modal! Woohoo.
          </p>
          <div className="d-flex flex-column gap-3">
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
              <LabelSelect
                label="Role"
                id="role"
                name="role"
                options={selectRole}
                value={selectedOption}
                onChange={handleSelectChange}
              />
            </div>
            <LabelTextarea
              label="Job Description"
              value={textAreaValue}
              onChange={handleTextAreaValueChange}
              id="jobDescription"
              placeholder="Enter your job description"
              rows={3}
            />
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
