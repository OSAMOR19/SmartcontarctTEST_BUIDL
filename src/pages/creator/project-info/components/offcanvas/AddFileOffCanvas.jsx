import useInput from "react-lite-input";
import { Offcanvas, Image } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import UploadFiles from "../../../../../assets/icons/upload-files.svg";
import LabelSelect from "../../../../../components/ui/selects/LabelSelect";
import MediumSolidButton from "../../../../../components/ui/buttons/MediumSolidButton";

const AddFileOffCanvas = ({
  show,
  handleClose,
  onFilesAccepted,
  dropFilesHelper,
  handleAddFiles,
  accessOptions,
  accessValues,
  accessValueChange,
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      // Call the passed callback prop with the accepted files
      onFilesAccepted(acceptedFiles);
    },
  });

  // if (Array.isArray(dropFilesHelper)) {
    const files = dropFilesHelper?.map((file) => (
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
  // }

  // const AddFiles = () => {
  //   console.log(values.access, dropFiles);
  //   handleClose();
  //   clearState();
  // };

  // const clearState = () => {
  //   setDropFiles("");
  //   values.access = "";
  // };

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
            options={accessOptions}
            value={accessValues}
            onChange={accessValueChange}
          />
          <div className="pt-4">
            <MediumSolidButton
              type="button"
              text="Save"
              style={btnStyles}
              onClick={handleAddFiles}
            />
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default AddFileOffCanvas;
