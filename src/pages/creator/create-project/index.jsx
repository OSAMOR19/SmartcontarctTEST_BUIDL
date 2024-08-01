import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProject } from "../../../store/projects/reducer";
import CreatorLayout from "../components/layouts";
import ProjectTitle from "./components/ProjectTitle";
import ProjectFiles from "./components/ProjectFiles";
import ProjectDone from "./components/ProjectDone";
import fileToBase64 from "./fileToBase64";
import EnhancedBreadcrumb from "../components/layouts/EnhancedBreadcrumb ";

const CreateProject = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleProjectDescriptionChange = (e) => {
    setProjectDescription(e.target.value);
  };

  const [files, setFiles] = useState([]);
  const handleFilesAccepted = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const [nameValue, setNameValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const handleNameValueChange = (e) => {
    setNameValue(e.target.value);
  };
  const handleSelectedOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleTextAreaValueChange = (e) => {
    setTextAreaValue(e.target.value);
  };

  const handleCreateProject = async () => {
    const documents = await Promise.all(
      files.map(async (file) => {
        const base64 = await fileToBase64(file);
        return {
          filename: file.name,
          contentType: file.type,
          base64: base64.split(",")[1],
        };
      })
    );

    const projectData = {
      cost: 200,
      title,
      description: projectDescription,
      documents,
      team: [
        {
          name: nameValue,
          role: selectedOption,
          email: "random@gmail.com",
          description: textAreaValue,
        },
      ],
    };
    dispatch(createProject(projectData));

    // Reset project fields
    clearProjectState();
  };

  function clearProjectState() {
    setTitle("");
    setProjectDescription("");
    setFiles("");
    setNameValue("");
    setSelectedOption("");
    setTextAreaValue("");
  }

  const onNextPage = async () => {
    setCurrentPage(currentPage + 1);
  };
  const onPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="fullHeightWithColorBg">
      <CreatorLayout />
      <EnhancedBreadcrumb previousValue="Create Project" />
      {currentPage === 1 && (
        <ProjectTitle
          onNext={onNextPage}
          title={title}
          handleTitleChange={handleTitleChange}
          projectDescription={projectDescription}
          handleProjectDescriptionChange={handleProjectDescriptionChange}
        />
      )}
      {currentPage === 2 && (
        <ProjectFiles
          onFilesAccepted={handleFilesAccepted}
          onPrev={onPrevPage}
          onNext={onNextPage}
        />
      )}
      {currentPage === 3 && (
        <ProjectDone
          nameValue={nameValue}
          handleNameValueChange={handleNameValueChange}
          selectedOption={selectedOption}
          handleSelectedOptionChange={handleSelectedOptionChange}
          textAreaValue={textAreaValue}
          handleTextAreaValueChange={handleTextAreaValueChange}
          handleCreateProject={handleCreateProject}
          onPrev={onPrevPage}
        />
      )}
    </div>
  );
};

export default CreateProject;
