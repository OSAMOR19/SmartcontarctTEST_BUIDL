import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import useInput from "react-lite-input";
import PdfIcon from "../../../../assets/icons/pdf-icon.svg";
import DocIcon from "../../../../assets/icons/doc-icon.svg";
import PptxIcon from "../../../../assets/icons/pptx-icon.svg";
import ExcelIcon from "../../../../assets/icons/excel-icon.svg";
import ImgIcon from "../../../../assets/icons/img-icon.svg";
import ActionIcon from "../../../../assets/icons/action-icon.svg";
import MediumSolidButton from "../../../../components/ui/buttons/MediumSolidButton";
import AddFileOffCanvas from "./offcanvas/AddFileOffCanvas";
import fileToBase64 from "../../../../lib/fileToBase64";

// FileTypeIcon
const FileTypeIcon = ({ fileType }) => {
  switch (fileType) {
    case "pdf":
      return <PdfIcon />;
    case "doc":
    case "docx":
      return <DocIcon />;
    case "pptx":
      return <PptxIcon />;
    case "xlsx":
      return <ExcelIcon />;
    case "jpg":
    case "png":
      return <ImgIcon />;
    default:
      return null;
  }
};

const ResourceStack = ({ projectResources }) => {
  const [dropFiles, setDropFiles] = useState([]);
  const [show, setShow] = useState(false);

  const dropFilesHelper = dropFiles;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFilesAccepted = (acceptedFiles) => {
    setDropFiles(acceptedFiles);
  };

  const initialValue = {
    access: "",
  };

  const { values, handleLiteChange } = useInput(initialValue);

  const selectAccess = [
    { value: "", label: "Select access" },
    { value: "Victor Charles", label: "Victor Charles" },
    { value: "John Deo", label: "John Deo" },
    { value: "Alex Ferguson", label: "Alex Ferguson" },
  ];

  const handleAddFiles = async () => {
    const documents = await Promise.all(
      dropFiles.map(async (file) => {
        const base64 = await fileToBase64(file);
        return {
          filename: file.name,
          contentType: file.type,
          base64: base64,
        };
      })
    );

    const addedFiles = {
      files: documents,
      projectId: 10,
      access: values.access,
    };
    console.log(addedFiles);
    clearState();
    handleClose();
  };

  const clearState = () => {
    setDropFiles([]);
    values.access = "";
  };

  const buttonStyles = {
    width: "8rem",
    margin: "0",
  };

  const divStyles = {
    background: "#232634",
    borderTop: "1px solid #3F4561",
  };

  return (
    <div>
      <div className="p-4 px-md-5">
        <MediumSolidButton
          type="button"
          text="+ Add File"
          style={buttonStyles}
          onClick={handleShow}
        />
      </div>
      <div className="d-flex flex-column">
        {files.map(({ id, fileType, fileName, dateUploaded }) => {
          return (
            <div style={divStyles} key={id} className="py-2 px-4 px-md-5">
              <div className="d-flex justify-content-between align-items-center">
                <span className="d-none d-md-block">
                  <FileTypeIcon fileType={fileType} />
                </span>
                <span className="normalPTag fw-medium">{fileName}</span>
                <span className="normalPTag fw-medium d-none d-md-block">
                  {dateUploaded}
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
                      >
                        Open
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        as="span"
                        className="useAppCursor fw-medium"
                      >
                        Download
                      </Dropdown.Item>
                      <Dropdown.Item
                        as="span"
                        className="useAppCursor fw-medium"
                      >
                        Edit
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <AddFileOffCanvas
        dropFilesHelper={dropFilesHelper}
        accessValues={values.access}
        accessValueChange={handleLiteChange}
        accessOptions={selectAccess}
        handleAddFiles={handleAddFiles}
        onFilesAccepted={handleFilesAccepted}
        show={show}
        handleClose={handleClose}
      />
    </div>
  );
};

const files = [
  {
    id: 1,
    fileType: "pdf",
    fileName: "Hello Buidl",
    dateUploaded: "04 May 2025",
  },
  {
    id: 2,
    fileType: "doc",
    fileName: "Hello Buidl",
    dateUploaded: "04 May 2025",
  },
  {
    id: 3,
    fileType: "pptx",
    fileName: "Hello Buidl",
    dateUploaded: "04 May 2025",
  },
  {
    id: 4,
    fileType: "xlsx",
    fileName: "Hello Buidl",
    dateUploaded: "04 May 2025",
  },
];

export default ResourceStack;
