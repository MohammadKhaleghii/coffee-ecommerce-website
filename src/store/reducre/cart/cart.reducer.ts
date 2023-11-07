import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "./cart.types";
import toast from "react-hot-toast";

const initialState: Cart[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (item) => item.productID === action.payload.productID
      );
      if (findProduct) {
        const newState = state.map((product) =>
          findProduct.productID === action.payload.productID
            ? {
                ...product,
                productQTY: product.productQTY + 1,
              }
            : product
        );
        toast.success(
          `محصول ${action.payload.productTitle} با موفقیت به سبد خرید شما اضافه شد`
        );
        return newState;
      } else {
        state.push({ ...action.payload, productQTY: 1 });
        toast.success(
          `محصول ${action.payload.productTitle} با موفقیت به سبد خرید شما اضافه شد`
        );
      }
    },
    decreaseItemInTocart: (state, action) => {
      const findProduct = state.find(
        (item) => item.productID === action.payload.productID
      );
      if (findProduct && findProduct.productQTY > 1) {
        return state.map((product) => {
          if (findProduct.productID === action.payload.productID) {
            debugger;
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

      const newState = state.filter(
        (product) => product.productID !== findProduct?.productID
      );
      toast.error(
        `محصول ${action.payload.productTitle} با موفقیت به سبد خرید شما حذف شد`
      );
      return newState;
    },
  },
});

export default cartSlice;
export const { addToCart, decreaseItemInTocart, removeFromCart } =
  cartSlice.actions;
