import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import UseSlicer from "./UserSlice";
export const store = configureStore({
  reducer: {
    user: UseSlicer.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
