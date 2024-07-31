import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../lib/apiClient";
import { StorageService } from "../../lib/storage";
import { authErrorHandler } from "../../services/apiErrorHandlers";
import toastService from "../../lib/taostService";

const name = "auth";

const initialState = {
  message: "",
  user: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    type: "",
    phone: "",
    username: "",
    verificationCode: "",
    profilePic: null,
    bio: "",
    portfolio: null,
    country: "",
    is_activated: false,
    language: null,
    role: null,
    skills: [],
    resume: null,
    upadtedAt: "",
  },
  isLoggedIn: false,
  requestStatus: "idle",
  error: "",
};

export const registerUser = createAsyncThunk(
  `${name}/registerUser`,
  async (registrationData) => {
    if (!registrationData) return;
    try {
      const result = await apiClient.post("auth/signup", registrationData);
      if (result.status === 201 && result.data) {
        return result.data;
      } else if (result.status === 400) {
        throw new Error(result.data.error);
      }
    } catch (err) {
      authErrorHandler(err);
    }
  }
);

export const activateAccount = createAsyncThunk(
  `${name}/activateAccount`,
  async (activationCode) => {
    if (!activationCode) return;
    try {
      const result = await apiClient.post("auth/activate", {
        code: activationCode,
      });
      if (result.status === 201 && result.data) {
        return result.data;
      } else if (result.status === 400) {
        throw new Error(result.data.error);
      }
    } catch (err) {
      authErrorHandler(err);
    }
  }
);

export const logInUser = createAsyncThunk(
  `${name}/resetPassword`,
  async (logInCredential) => {
    if (!logInCredential) return;
    try {
      const result = await apiClient.post("auth/login", logInCredential);
      if (result.status === 201 && result.data) {
        return result.data;
      } else if (result.status === 400) {
        throw new Error(result.data.error);
      }
    } catch (err) {
      authErrorHandler(err);
    }
  }
);

export const getProfile = createAsyncThunk(`${name}/getProfile`, async () => {
  try {
    const result = await apiClient.get("auth/profile");
    if (result.status === 200 && result.data) {
      return result.data;
    } else if (result.status === 400) {
      throw new Error(result.data.error);
    }
  } catch (err) {
    authErrorHandler(err);
  }
});

export const resendOtp = createAsyncThunk(
  `${name}/resendOtp`,
  async (email) => {
    if (!email) {
      return;
    }
    try {
      const result = await apiClient.post("auth/resend-otp", {
        email: email,
      });
      if (result.status === 201 && result.data) {
        return result.data;
      } else if (result.status === 400) {
        throw new Error(result.data.error);
      }
    } catch (err) {
      authErrorHandler(err);
    }
  }
);

export const logoutUser = createAsyncThunk(`${name}/logoutUser`, async () => {
  try {
    const result = await apiClient.post("auth/logout");
    if (result.status === 201 && result.data) {
      return result.data;
    } else if (result.status === 400) {
      throw new Error(result.data.error);
    }
  } catch (err) {
    authErrorHandler(err);
  }
});

const AuthSlice = createSlice({
  name,
  initialState,
  reducers: {
    resetAuthState: (state) => {
      state.user = {
        id: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        code: "",
      };
      state.message = "", 
      state.error = "";
      state.requestStatus = "idle";
      StorageService.removeAuthToken();
    },
  },
  extraReducers: (builder) => {
    // register builder
    builder.addCase(registerUser.pending, (state) => {
      state.requestStatus = "loading";
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.requestStatus = "failed";
      toastService.showErrorMessage(action.error.message);
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload.data.user;
      state.requestStatus = "success";
      StorageService.setAuthToken(action.payload.data.token.access_token);
      toastService.showSuccessMessage(action.payload.data.message);
    });
    // activate builder
    builder.addCase(activateAccount.pending, (state) => {
      state.requestStatus = "loading";
    });
    builder.addCase(activateAccount.rejected, (state, action) => {
      state.error = action.error.message;
      state.requestStatus = "failed";
      toastService.showErrorMessage(action.error.message);
    });
    builder.addCase(activateAccount.fulfilled, (state, action) => {
      state.user = action.payload.data.data;
      state.requestStatus = "idle";
      window.location.assign("/auth/login");
      toastService.showSuccessMessage(action.payload.data.message);
    });
    // login builder
    builder.addCase(logInUser.pending, (state) => {
      state.requestStatus = "loading";
    });
    builder.addCase(logInUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.requestStatus = "failed";
      toastService.showErrorMessage(action.error.message);
    });
    builder.addCase(logInUser.fulfilled, (state, action) => {
      state.requestStatus = "idle";
      toastService.showSuccessMessage(action.payload.data.message);
      StorageService.setAuthToken(action.payload.data.token.access_token);
      // window.location.assign("/creator/dashboard");
    });
    // get profile
    builder.addCase(getProfile.pending, (state) => {
      state.requestStatus = "loading";
    });
    builder.addCase(getProfile.rejected, (state, action) => {
      state.error = action.error.message;
      state.requestStatus = "failed";
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.requestStatus = "idle";
      state.user = action.payload.data.user;
      window.location.assign("/creator/dashboard");
      // if (!action.payload.data.user.is_activated) {
      //   window.location.assign("/auth/input-otp-resend");
      // } else {
      //   window.location.assign("/creator/dashboard");
      // }
    });
    // re-send Otp
    builder.addCase(resendOtp.pending, (state) => {
      state.requestStatus = "loading";
    });
    builder.addCase(resendOtp.rejected, (state, action) => {
      state.error = action.error.message;
      state.requestStatus = "failed";
    });
    builder.addCase(resendOtp.fulfilled, (state, action) => {
      state.requestStatus = "success";
      state.user = action.payload.data.user;
      toastService.showSuccessMessage(action.payload.data.message);
      StorageService.setAuthToken(action.payload.data.token.access_token);
    });
    // logout builder
    builder.addCase(logoutUser.pending, (state, action) => {
      state.requestStatus = "idle";
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.message = "";
      state.user = {
        id: "",
        firstName: "",
        lastName: "",
        username: "",
        phone: "",
        email: "",
        code: "",
      };
      state.isLoggedIn = false;
      state.requestStatus = "idle";
      state.error = "";
      toastService.showSuccessMessage(action.payload.data.message);
      // window.location.assign("/auth/login");
      StorageService.removeAuthToken();
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.requestStatus = "failed";
      toastService.showErrorMessage(action.error.message);
    });
  },
});

export const { resetAuthState } = AuthSlice.actions;
export const selectAuth = (store) => store.Auth;
export default AuthSlice.reducer;
