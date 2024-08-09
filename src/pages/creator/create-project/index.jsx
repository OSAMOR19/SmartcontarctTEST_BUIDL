import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProject } from "../../../store/projects/reducer";
import CreatorLayout from "../components/layouts";
import ProjectDetails from "./components/ProjectDetails";
import ProjectFiles from "./components/ProjectFiles";
import ProjectFinalize from "./components/ProjectFinalize";
import fileToBase64 from "./fileToBase64";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import EnhancedBreadcrumb from "../components/layouts/EnhancedBreadcrumb ";
import SelectTalents from "./components/SelectTalents";
import ProjectPayment from "./components/ProjectPayment";

const CreateProject = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [files, setFiles] = useState([]);
  const [team, setTeam] = useState([]);

  const [talentBudgets, setTalentBudgets] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDurationSelectChange = (e) => {
    setDuration(e.target.value);
  };
  const handleProjectDescriptionChange = (e) => {
    setProjectDescription(e.target.value);
  };
  const handleFilesAccepted = (acceptedFiles) => {
    setFiles(acceptedFiles);
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
      team,
      talentBudgets,
    };
    console.log(projectData);
    // dispatch(createProject(projectData));

    // Reset project fields
    clearProjectState();
  };

  function clearProjectState() {
    setTitle("");
    setProjectDescription("");
    setFiles([]);
    setTeam([]);
  }

  const { currentStep, nextStep, prevStep } = useMultiStepForm();

  return (
    <div className="fullHeightWithColorBg">
      <CreatorLayout />
      <EnhancedBreadcrumb previousValue="Create Project" />
      {currentStep === 1 && (
        <ProjectDetails
          onNext={nextStep}
          title={title}
          handleTitleChange={handleTitleChange}
          duration={duration}
          handleDurationSelectChange={handleDurationSelectChange}
          projectDescription={projectDescription}
          handleProjectDescriptionChange={handleProjectDescriptionChange}
        />
      )}
      {currentStep === 2 && (
        <ProjectFiles
          onFilesAccepted={handleFilesAccepted}
          onNext={nextStep}
          onPrev={prevStep}
        />
      )}
      {currentStep === 3 && (
        <ProjectFinalize
          handleCreateProject={handleCreateProject}
          onNext={nextStep}
          onPrev={prevStep}
          team={team}
          setTeam={setTeam}
        />
      )}
      {currentStep === 4 && (
        <SelectTalents
          handleCreateProject={handleCreateProject}
          onUpdateTalents={setTalentBudgets}
          onNext={nextStep}
          onPrev={prevStep}
          talentBudgets={talentBudgets}
        />
      )}
      {currentStep === 5 && (
        <ProjectPayment
          onNext={nextStep}
          onPrev={prevStep}
          talentBudgets={talentBudgets}
        />
      )}
    </div>
  );
};

export default CreateProject;
