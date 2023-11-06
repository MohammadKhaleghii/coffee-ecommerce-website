import { createSlice } from "@reduxjs/toolkit";
import { CartItemProps } from "../../../component/cart-item/cart-item.interface";

const initialState: CartItemProps[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (item) => item.productID === action.payload.productID
      );
      if (findProduct) {
        const increaseQTY = {
          ...action.payload,
          productQTY: action.payload.productQTY + 1,
        };
        return state.map((product) => {
          return findProduct.productID === action.payload.productID
            ? {
                ...product,
                productQTY: product.productQTY + 1,
              }
            : product;
        });
      } else {
        state.push({ ...action.payload, productQTY: 1 });
      }
    },
    decreaseItemInTocart: (state, action) => {},
    removeFromCart: (state, action) => {},
  },
});

export default cartSlice;
export const { addToCart, decreaseItemInTocart, removeFromCart } =
  cartSlice.actions;
