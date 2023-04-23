import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Register {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
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

const initialState: AuthState = {
  username: "",
  token: "",
  errorMessage: "",
};

// TODO: Async thunks
export const registerUser = createAsyncThunk(
  "auth/register",
  async (registerDetails: Register) => {
    try {
      console.log(registerDetails);
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        registerDetails
      );
      console.log(res.data);
      return res.data;
    } catch (error: any) {
      throw Error(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
    });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
