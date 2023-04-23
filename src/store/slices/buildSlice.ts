import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Build {
  id?: number;
  name: string;
  description: string;
  civilization:
    | "ABBASID_DYNASTY"
    | "CHINESE"
    | "DELHI_SULTANTE"
    | "ENGLISH"
    | "FRENCH"
    | "HOLY_ROMAN_EMPIRE"
    | "MALIANS"
    | "MONGOLS"
    | "OTTOMANS"
    | "RUS";
  difficulty: "EASY" | "MEDIUM" | "HARD";
  mapType: "OPEN" | "CLOSED" | "HYBRID" | "WATER";
  buildType:
    | "CHEESE"
    | "DEFENSIVE"
    | "ECONOMIC"
    | "FAST_CASTLE"
    | "TIMING_ATTACK";
  // step: Step[];
  creator: string;
  createdAt: string;
  updatedAt: string;
}

export interface Step {
  id: string;
  time: string;
  description: string;
  food: number;
  wood: number;
  gold: number;
  stone: number;
}

export interface BuildsState {
  builds: Build[];
}

const apiEndpoint = `${import.meta.env.VITE_API_ENDPOINT}`;
console.log(apiEndpoint)

const initialState: BuildsState = {
  builds: [],
};

export const getAllBuilds = createAsyncThunk("/builds", async () => {
  try {
    const res = await axios(`${apiEndpoint}/builds`);
    // console.log(res.data);
    return res.data;
  } catch (error: any) {
    throw new Error();
  }
});
const buildsSlice = createSlice({
  name: "builds",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(getAllBuilds.fulfilled, (state, action) => {
      state.builds = action.payload;
    });
  },
});

export const {} = buildsSlice.actions;
export default buildsSlice.reducer;
