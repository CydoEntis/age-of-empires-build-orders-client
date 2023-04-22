import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  username: string;
  token: string;
  errorMessage: string;
}

const initialState: AuthState = {
  username: "",
  token: "",
  errorMessage: ""
};

// TODO: Async thunks

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: function (builder) {},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
