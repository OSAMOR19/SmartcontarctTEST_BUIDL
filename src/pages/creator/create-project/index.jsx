import { useEffect, useState } from "react";
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
import { useSearchParams } from "react-router-dom";

const CreateProject = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [files, setFiles] = useState([]);
  const [team, setTeam] = useState([]);
  const [talentBudgets, setTalentBudgets] = useState([]);

  const filesHelper = files;

  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("id");

  const getEditBudgetStep = parseInt(searchParams.get("step"), 10);

  useEffect(() => {
    if (projectId) {
      setTitle(project.title);
      setDuration(project.duration);
      setProjectDescription(project.description);
      setTalentBudgets(project.talentBudgets);

      if (getEditBudgetStep) {
        setCurrentStep(getEditBudgetStep);
      } else {
        setCurrentStep(project.lastSavedStep);
      }
    }
  }, [projectId, getEditBudgetStep]);

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

  const calculateTotalBudget = () => {
    return talentBudgets.reduce((total, entry) => {
      const numericBudget = parseFloat(entry.budget.replace(/[^0-9.]/g, ""));
      return total + (isNaN(numericBudget) ? 0 : numericBudget);
    }, 0);
  };

  const handleCreateProject = async () => {
    const documents = await Promise.all(
      files.map(async (file) => {
        const base64 = await fileToBase64(file);
        return {
          filename: file.name,
          contentType: file.type,
          base64: base64,
        };
      })
    );

    const projectData = {
      cost: 200,
      title,
      description: projectDescription,
      documents,
      team,
      // talentBudgets,
    };
    // console.log(projectData);
    dispatch(createProject(projectData));

    // Reset project fields
    clearProjectState();
  };

  function clearProjectState() {
    setTitle("");
    setProjectDescription("");
    setFiles([]);
    setTeam([]);
  }

  const { currentStep, setCurrentStep, nextStep, prevStep } =
    useMultiStepForm();

  return (
    <div className="fullHeightWithColorBg">
      <CreatorLayout />
      <EnhancedBreadcrumb previousValue="Create Project" />
      {currentStep === 1 && (
        <ProjectDetails
          onNext={nextStep}
          handleCreateProject={handleCreateProject}
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
          handleCreateProject={handleCreateProject}
          onNext={nextStep}
          onPrev={prevStep}
          filesHelper={filesHelper}
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
          totalBudget={calculateTotalBudget()}
          projectTitle={title}
        />
      )}
    </div>
  );
};

const project = {
  id: 1,
  title: "Shopify e-commerce System",
  description: "I love you boss",
  duration: 4,
  progress: 0,
  team: 0,
  lastSavedStep: 2,
  talentBudgets: [
    {
      id: 1,
      role: "Frontend Developer",
      budget: 1000,
      applicant: 12,
      status: "hired",
    },
    {
      id: 2,
      role: "Backend Developer",
      budget: 500,
      applicant: 9,
      status: "notHired",
    },
  ],
  status: "draft",
};

export default CreateProject;
