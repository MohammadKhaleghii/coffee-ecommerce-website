import { createSlice } from "@reduxjs/toolkit";
import { UserSliceTypes } from "./user.types";

const initialState: UserSliceTypes | null = {
  displayName: "",
  email: "",
};

export const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {},
});
