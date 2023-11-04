import { createSlice } from "@reduxjs/toolkit";
import { UserSliceTypes } from "./user.types";

const initialState: UserSliceTypes | null = null;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeCurrnetUser(state) {
      state = null;
    },
    currentUser(state, action) {
      return (state = action.payload);
    },
  },
});

export const { removeCurrnetUser, currentUser } = userSlice.actions;
