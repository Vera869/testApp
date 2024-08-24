import { createSlice } from "@reduxjs/toolkit";
import { SliceState } from "../Types";

const initialState: SliceState = {
  allItems: [],
  favItems: [],
  isLoad: true,
  errorMessage: "",
  isFiltered: false,
  currentItemId: "",
  category: "women's clothing",
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setAllItems(state, action) {
      state.allItems = action.payload;
    },
    setIsLoad(state, action) {
      state.isLoad = action.payload;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
    setIsFiltered(state) {
      state.isFiltered = !state.isFiltered;
    },
    setFavItems(state, action) {
      state.favItems = action.payload;
    },
    setCurrentItemId(state, action) {
      state.currentItemId = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
  }
});
export const itemsReducer = itemsSlice.reducer;
export const { 
  setAllItems, 
  setIsLoad, 
  setErrorMessage, 
  setIsFiltered, 
  setCurrentItemId, 
  setFavItems, 
  setCategory
} = itemsSlice.actions;