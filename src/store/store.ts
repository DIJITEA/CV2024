import { configureStore } from "@reduxjs/toolkit";

import ProductsSlice from "./actions/basketSorage";
import ButtonSlice from "./actions/buttonStorage";
import ThemeSlice from "./actions/ThemeStorage";

const store = configureStore({
  reducer: {
    ProductsS: ProductsSlice,
    ButtonS: ButtonSlice,
    ThemeS: ThemeSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
