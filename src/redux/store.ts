import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./slices/theme-slice";
import userReducer from "./slices/user-slice";

const store = configureStore({
  reducer: {
    themeReducer,
    userReducer,
  },
});
export default store;

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
