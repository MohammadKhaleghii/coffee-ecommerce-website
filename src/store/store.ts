import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducre/cart.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  [cartSlice.name]: cartSlice.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
