import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userSlice from "./UserSlice";
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
