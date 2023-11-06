import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducre/cart/cart.reducer";
import { combineReducers } from "redux";
import { userSlice } from "./reducre/user/user.reducer";

const rootReducer = combineReducers({
  [cartSlice.name]: cartSlice,
  [userSlice.name]: userSlice.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
