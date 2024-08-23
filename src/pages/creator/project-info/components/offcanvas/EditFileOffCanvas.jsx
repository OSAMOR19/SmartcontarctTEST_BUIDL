import { useState } from "react";
import useInput from "react-lite-input";
import { Offcanvas, Image } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import UploadFiles from "../../../../../assets/icons/upload-files.svg";
import LabelSelect from "../../../../../components/ui/selects/LabelSelect";
import MediumSolidButton from "../../../../../components/ui/buttons/MediumSolidButton";
import images from "../../../../../constants/images";
import RemoveAccess from "../../../../../assets/icons/remove-access.svg";

const EditFileOffCanvas = ({ show, handleClose }) => {
  const [dropFiles, setDropFiles] = useState([]);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      // Call the passed callback prop with the accepted files
      setDropFiles(acceptedFiles);
    },
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} -{" "}
      <span
        style={{
          color: "#EEA20E",
        }}
      >
        {file.size} bytes
      </span>
    </li>
  ));

  const initialValue = {
    access: "",
  };

  const { values, handleLiteChange } = useInput(initialValue);

  const selectAccess = [
    { value: "", label: "Select access" },
    { value: "frontend developer", label: "Frontend Developer" },
    { value: "backend developer", label: "Backend Developer" },
    { value: "product designer", label: "Product Designer" },
  ];

  const AddFiles = () => {
    console.log(values.access, dropFiles);
    handleClose();
    clearState();
  };

  const clearState = () => {
    setDropFiles("");
    values.access = "";
  };

  const offCanvasStyles = {
    backgroundColor: "#21232F",
  };

  const roleStyles = {
    color: "#A0A0A0",
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
          <h5 className="useAppWhite mb-0">Add Files</h5>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="d-flex flex-column gap-4">
          <div>
            <p className="normalPTag  fw-normal">Upload Files</p>
            <section className="">
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <div className="d-flex align-items-center justify-content-center gap-2 p-4">
                  <span>
                    <UploadFiles />
                  </span>
                  <p className="normalPTag mb-0">Upload Files</p>
                </div>
              </div>
              <aside className="normalPTag pt-2">
                <ul>{files}</ul>
              </aside>
            </section>
          </div>
          <LabelSelect
            label="Access"
            id="access"
            name="access"
            options={selectAccess}
            value={values.access}
            onChange={handleLiteChange}
          />
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <Image
                src={images.charlesImage.src}
                alt={images.charlesImage.alt}
                width={50}
              />
              <div className="d-flex flex-column align-items-start">
                <span className="useAppWhite normalPTag fw-semibold">
                  Charles Victor
                </span>
                <small
                  className="useAppWhite fs-6 fw-medium"
                  style={roleStyles}
                >
                  Frontend Developer
                </small>
              </div>
            </div>
            <span>
              <RemoveAccess />
            </span>
          </div>
          <div className="pt-4">
            <MediumSolidButton
              type="button"
              text="Save"
              style={btnStyles}
              onClick={AddFiles}
            />
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default EditFileOffCanvas;
