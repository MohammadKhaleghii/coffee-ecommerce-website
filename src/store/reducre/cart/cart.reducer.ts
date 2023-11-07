import { createSlice } from "@reduxjs/toolkit";
import { CartSliceTypes } from "./cart.types";
import toast from "react-hot-toast";

const initialState: CartSliceTypes[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (cartState, action) => {
      const findProduct = cartState.find(
        (item) => item.productID === action.payload.productID
      );
      if (findProduct) {
        const newState = cartState.map((product) =>
          product.productID === action.payload.productID
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
        cartState.push({ ...action.payload, productQTY: 1 });
        toast.success(
          `محصول ${action.payload.productTitle} با موفقیت به سبد خرید شما اضافه شد`
        );
      }
    },
    decreaseItemInTocart: (cartState, action) => {
      const findProduct = cartState.find(
        (item) => item.productID === action.payload.productID
      );
      if (findProduct && findProduct.productQTY > 1) {
        toast.error(
          `تعداد محصول ${action.payload.productTitle} با موفقیت کاهش یافت`
        );
        return cartState.map((product) =>
          product.productID === action.payload.productID
            ? {
                ...product,
                productQTY: product.productQTY - 1,
              }
            : product
        );
      } else {
        toast.error(
          `محصول ${action.payload.productTitle} با موفقیت به سبد خرید شما حذف شد`
        );
        return cartState.filter(
          (product) => product.productID !== findProduct?.productID
        );
      }
    },
    removeFromCart: (cartState, action) => {
      const findProduct = cartState.find(
        (item) => item.productID === action.payload.productID
      );

      const newState = cartState.filter(
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
