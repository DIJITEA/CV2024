import { createSlice } from "@reduxjs/toolkit";

interface ProductsState {
  darkMode: boolean;
}

const initialState: ProductsState = {
  darkMode: true,
};

export const ThemeSlice = createSlice({
  name: "ThemeSlice",
  initialState,
  reducers: {
    ChangeTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { ChangeTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
