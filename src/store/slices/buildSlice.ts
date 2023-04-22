import { createSlice } from "@reduxjs/toolkit";

export interface Build {
  id: number;
  name: string;
  description: string;
  civilization:
    | "ABBASID_DYNASTY"
    | "CHINESE"
    | "DELHI_SULTANTE"
    | "ENGLISH"
    | "FRENCH"
    | "HOLY_ROMAN_EMPIRE"
    | "MAILAINS"
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
  step: Step[];
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

const initialState: BuildsState = {
  builds: [],
};
// TODO: add async thunks

const buildsSlice = createSlice({
  name: "builds",
  initialState,
  reducers: {},
  extraReducers: function (builder) {},
});

export const {} = buildsSlice.actions;
export default buildsSlice.reducer;
