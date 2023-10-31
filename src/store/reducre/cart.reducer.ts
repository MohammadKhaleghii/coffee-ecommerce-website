import { createSlice } from "@reduxjs/toolkit";

const initialState: any = ["a"];

const cartSlice = createSlice({
  name: "cart",
  reducers: {},
  initialState,
});


export default cartSlice