import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducre/cart.reducer";


export const store = configureStore({
    reducer: cartSlice.reducer
})