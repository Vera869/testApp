import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    allItems: [],
    favItems: [],
    isLoad: true,
    errorMessage: "",
    isFiltered: false,
    currentItemId: "",
  },
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
      localStorage.setItem("id", state.currentItemId);
    },
  },
   
});
export const itemsReducer = itemsSlice.reducer;
export const { setAllItems, setIsLoad, setErrorMessage, setIsFiltered, setCurrentItemId, setFavItems} = itemsSlice.actions;