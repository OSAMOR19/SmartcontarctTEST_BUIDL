import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../lib/apiClient";
import { authErrorHandler } from "../../services/apiErrorHandlers";
import toastService from "../../lib/taostService";

const name = "project";

const initialState = {
  message: "",
  status: "",
  project: {
    id: null,
    title: null,
    description: "",
    cost: 0,
    progress: 0,
    duration: "",
    approach: "",
    documents: [],
    team: [],
    status: "",
    role: [],
    createdAt: null,
    isCompleted: false,
    updatedAt: null,
    userId: null,
    projectResources: null,
  },
  allProjects: null,
  requestStatus: "idle",
  error: "",
};

export const createProject = createAsyncThunk(
  `${name}/createProject`,
  async (projectData) => {
    if (!projectData) return;
    try {
      const response = await apiClient.post("project/add", projectData);
      if (response.status === 201 && response.data) {
        return response.data;
      } else if (response.status === 400) {
        throw new Error(response.data.error);
      }
    } catch (err) {
      authErrorHandler(err);
    }
  }
);

export const getAllProjects = createAsyncThunk(
  `${name}/getAllProjects`,
  async () => {
    try {
      const response = await apiClient.get("project/all");
      if (response.status === 200 && response.data) {
        return response.data;
      } else {
        throw new Error("Failed to fetch projects");
      }
    } catch (err) {
      authErrorHandler(err);
    }
  }
);

export const getProjectById = createAsyncThunk(
  `${name}/getProjectById`,
  async (projectId) => {
    try {
      const response = await apiClient.get(`project/${projectId}`);
      if (response.status === 200 && response.data) {
        return response.data;
      } else {
        throw new Error("Failed to fetch project");
      }
    } catch (err) {
      authErrorHandler(err);
    }
  }
);

export const addNewTeam = createAsyncThunk(
  `${name}/addNewTeam`,
  async (newTeamData) => {
    if (!newTeamData) return;
    try {
      const response = await apiClient.post(`creators/add`, newTeamData);
      if (response.status === 200 && response.data) {
        return response.data;
      } else {
        throw new Error("Failed to fetch project");
      }
    } catch (err) {
      authErrorHandler(err);
    }
  }
);

export const getProjectResources = createAsyncThunk(
  `${name}/getProjectResources`,
  async (projectId) => {
    try {
      const response = await apiClient.get(`resources/all/${projectId}`);
      if (response.status === 200 && response.data) {
        return response.data;
      } else {
        throw new Error("Failed to fetch project");
      }
    } catch (err) {
      authErrorHandler(err);
    }
  }
);

const ProjectSlice = createSlice({
  name,
  initialState,
  reducers: {
    resetProjectState: (state) => {
      state.project = {
        id: null,
        title: null,
        description: "",
        cost: 0,
        progress: 0,
        duration: "",
        approach: "",
        documents: [],
        team: [],
        status: "",
        role: [],
        createdAt: null,
        isCompleted: false,
        updatedAt: null,
        userId: null,
      };
      (state.message = ""), (state.requestStatus = "idle");
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    // create project builder
    builder.addCase(createProject.pending, (state) => {
      state.requestStatus = "loading";
      console.log("fess requestStatus");
    });
    builder.addCase(createProject.rejected, (state, action) => {
      state.error = action.error.message;
      state.requestStatus = "failed";
      toastService.showErrorMessage(action.error.message);
    });
    builder.addCase(createProject.fulfilled, (state, action) => {
      state.project = action.payload.data.project;
      state.requestStatus = "createSuccessFull";
      console.log("second requestStatus");
    });
    // get all projects builder
    builder.addCase(getAllProjects.pending, (state) => {
      state.requestStatus = "loading";
    });
    builder.addCase(getAllProjects.rejected, (state, action) => {
      state.error = action.error.message;
      state.requestStatus = "failed";
      toastService.showErrorMessage(action.error.message);
    });
    builder.addCase(getAllProjects.fulfilled, (state, action) => {
      state.requestStatus = "getAllSuccessFull";
      state.allProjects = action.payload.data.projects;
    });
    // get project by id builder
    builder.addCase(getProjectById.pending, (state) => {
      state.requestStatus = "loading";
    });
    builder.addCase(getProjectById.rejected, (state, action) => {
      state.error = action.error.message;
      state.requestStatus = "failed";
    });
    builder.addCase(getProjectById.fulfilled, (state, action) => {
      state.project = action.payload.data.project;
      state.requestStatus = "getByIdSuccessFull";
    });
    // get project resources by id
    builder.addCase(getProjectResources.pending, (state) => {
      state.requestStatus = "loading";
    });
    builder.addCase(getProjectResources.rejected, (state, action) => {
      state.error = action.error.message;
      state.requestStatus = "failed";
    });
    builder.addCase(getProjectResources.fulfilled, (state, action) => {
      state.project.projectResources = action.payload.data.project;
      // console.log(state.project.projectResources);
      state.requestStatus = "getProjectResourcesSuccessFull";
    });
    // add new team
    builder.addCase(addNewTeam.pending, (state) => {
      state.requestStatus = "loading";
    });
    builder.addCase(addNewTeam.rejected, (state, action) => {
      state.error = action.error.message;
      state.requestStatus = "failed";
    });
    builder.addCase(addNewTeam.fulfilled, (state, action) => {
      // state.project.projectResources = action.payload.data.project;
      console.log(action.payload.data.project);
      state.requestStatus = "addNewTeamSuccessFull";
    });
  },
});

export const { resetProjectState } = ProjectSlice.actions;
export const selectProject = (store) => store.Project;
export default ProjectSlice.reducer;
