import { createSlice } from "@reduxjs/toolkit";

interface ProductsState {
  darkMode: boolean;
  lang: boolean;
}

const initialState: ProductsState = {
  darkMode: true,
  lang: true,
};

export const ThemeSlice = createSlice({
  name: "ThemeSlice",
  initialState,
  reducers: {
    ChangeTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
    ChangeLang: (state) => {
      state.lang = !state.lang;
    },
  },
});

export const { ChangeTheme, ChangeLang } = ThemeSlice.actions;

export default ThemeSlice.reducer;
