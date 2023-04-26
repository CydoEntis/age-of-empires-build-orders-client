import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useAppSelector } from "../../hooks/reduxHooks";

export interface Build {
  id?: number;
  title: string;
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
    | "RUS"
    | "";
  difficulty: "EASY" | "MEDIUM" | "HARD" | "";
  mapType: "OPEN" | "CLOSED" | "HYBRID" | "WATER" | "";
  buildType:
    | "CHEESE"
    | "DEFENSIVE"
    | "ECONOMIC"
    | "FAST_CASTLE"
    | "TIMING_ATTACK"
    | "";
  createdBy?: string;
  createdDate?: Date | null;
  updatedDate?: Date | null;
}

export interface BuildWithSteps extends Build {
  steps: Step[];
}

export interface Step {
  id?: number;
  villagers: number;
  step: string;
  food: number;
  wood: number;
  gold: number;
  stone: number;
}

export interface BuildsState {
  builds: Build[];
  build: BuildWithSteps | null;
}

const apiEndpoint = `${import.meta.env.VITE_API_ENDPOINT}`;

const initialState: BuildsState = {
  builds: [],
  build: null
};

export const getAllBuilds = createAsyncThunk("/builds", async () => {
  try {
    const res = await axios(`${apiEndpoint}/builds`);
    return res.data;
  } catch (error: any) {
    throw new Error();
  }
});

export const getBuildById = createAsyncThunk("builds/id", async(id: number) => {
  try {
    const res = await axios(`${apiEndpoint}/builds/${id}`);
    return res.data;
  } catch (error: any) {
    throw new Error();
  }
})

export function setHeaders() {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
}

export const createBuild = createAsyncThunk(
  "/builds/create",
  async (build: BuildWithSteps) => {
    console.log("clicked")
    // let config = {
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // };
    let config = setHeaders();
    console.log(config);
    try {
      const res = await axios.post(
        `${apiEndpoint}/builds/create`,
        build,
        config
      );
      return res.data;
    } catch (error: any) {
      throw new Error();
    }
  }
);

const buildsSlice = createSlice({
  name: "builds",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(getAllBuilds.fulfilled, (state, action) => {
      state.builds = action.payload;
    });
    builder.addCase(createBuild.fulfilled, (state, action) => {
      state.builds.push(action.payload);
    });
    builder.addCase(getBuildById.fulfilled, (state, action) => {
      state.build = action.payload;
    })
  },
});

export const {} = buildsSlice.actions;
export default buildsSlice.reducer;
