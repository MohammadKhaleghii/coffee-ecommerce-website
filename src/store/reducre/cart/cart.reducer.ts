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
        return state.map((product) =>
          findProduct.productID === action.payload.productID
            ? {
                ...product,
                productQTY: product.productQTY + 1,
              }
            : product
        );
      } else {
        state.push({ ...action.payload, productQTY: 1 });
      }
    },
    decreaseItemInTocart: (state, action) => {
      const findProduct = state.find(
        (item) => item.productID === action.payload.productID
      );
      if (findProduct && findProduct.productQTY > 1) {
        return state.map((product) => {
          if (findProduct.productID === action.payload.productID) {
            debugger
            return {
              ...product,
              productQTY: product.productQTY - 1,
            };
          } else {
            return product;
          }
        });
      } else {
        return state.filter(
          (product) => product.productID !== findProduct?.productID
        );
      }
    },
    removeFromCart: (state, action) => {
      const findProduct = state.find(
        (item) => item.productID === action.payload.productID
      );
      return state.filter(
        (product) => product.productID !== findProduct?.productID
      );
    },
  },
});

export default cartSlice;
export const { addToCart, decreaseItemInTocart, removeFromCart } =
  cartSlice.actions;
