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

const username = localStorage.getItem("user");
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

async function getCsrfTokenConfig() {
  try {
    const res = await axios("http://localhost:8080/api/v1/auth/csrf");
    return {
      headers: {
        "X-CSRF-TOKEN": res.data.token,
      },
    };
  } catch (error: any) {
    throw new Error();
  }
}

// TODO: Clean up axios calls, move url to .env variable.
export const registerUser = createAsyncThunk(
  "auth/register",
  async (registerDetails: RegisterDetails) => {
    try {
      console.log(registerDetails);
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
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
      let config = await getCsrfTokenConfig();
      console.log(config);
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        loginDetails,
        config
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

      console.log("state: ", state);
    });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
