import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/slices/authSlice";
import buildsReducer from "../store/slices/buildSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    builds: buildsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
