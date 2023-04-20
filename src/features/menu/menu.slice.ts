import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type InitialState = {
  path: "Special" | "Food" | "Deserts" | "Beverages";
  foodContent: any;
};

const initialState: InitialState = {
  path: "Special",
  foodContent: [],
};

export const menuSlice = createSlice({
  name: "menuSlice",
  initialState,
  reducers: {
    setPath: (state, action) => {
      state.path = action.payload.path;
      state.foodContent = action.payload.menu;
    },
  },
  extraReducers: {},
});

export const { setPath } = menuSlice.actions;
export default menuSlice.reducer;
