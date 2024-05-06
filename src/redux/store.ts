import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./slices/theme-slice";

const store = configureStore({
  reducer: {
    themeReducer,
  },
});
export default store;

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
