import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "./Slice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];