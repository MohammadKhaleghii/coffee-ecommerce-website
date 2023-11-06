import { createSlice } from "@reduxjs/toolkit";
import { CartItemProps } from "../../../component/cart-item/cart-item.interface";

const initialState: CartItemProps[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {},
    decreaseItemInTocart: (state, action) => {},
    removeFromCart: (state, action) => {},
  },
});

export default cartSlice.reducer;
