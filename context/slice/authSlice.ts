import { User } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  user: User | null;
};

type Action = {
  payload: User | null;
};

const initialState: initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "loginModalSlice",
  initialState,
  reducers: {
    setUser: (state: initialState, action: Action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
