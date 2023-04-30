import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface RegisterDetails {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface LoginDetails {
  username: string;
  password: string;
}

export interface User {
  username: string;
  password: string;
}

export interface AuthState {
  username: string;
  token: string;
  errorMessage: string;
}

const apiEndpoint = `${import.meta.env.VITE_API_ENDPOINT}`;

const username = localStorage.getItem("username");
const token = localStorage.getItem("token");

const initialState: AuthState = {
  username: username ? username : "",
  token: token ? token : "",
  errorMessage: "",
};


function saveUserDetailsToLocalStorage(username: string, token: string) {
  localStorage.setItem("username", username);
  localStorage.setItem("token", token);
}

export const registerUser = createAsyncThunk(
  "auth/register",
  async (registerDetails: RegisterDetails) => {
    try {

      const res = await axios.post(
        `${apiEndpoint}/auth/register`,
        registerDetails
      );

      saveUserDetailsToLocalStorage(res.data.username, res.data.token);

      return res.data;
    } catch (error: any) {
      throw Error(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (loginDetails: LoginDetails) => {
    try {
      const res = await axios.post(
        `${apiEndpoint}/auth/login`,
        loginDetails,
      );
      saveUserDetailsToLocalStorage(res.data.username, res.data.token);

      return res.data;
    } catch (error: any) {
      throw Error(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.username = "";
      state.token = "";
      localStorage.removeItem("username");
      localStorage.removeItem("token");
    },
  },
  extraReducers: function (builder) {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
    });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
