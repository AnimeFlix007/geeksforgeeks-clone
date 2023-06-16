import { User } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  user: User | null;
};

type Action = {
  payload: User | null;
};

const getUserDetails = localStorage.getItem("geeks4geeks")

const loggedInUser = localStorage.getItem("geeks4geeks") ? JSON.parse(getUserDetails) : null

const initialState: initialState = {
  user: loggedInUser,
};

const authSlice = createSlice({
  name: "loginModalSlice",
  initialState,
  reducers: {
    setUser: (state: initialState, action: Action) => {
      state.user = action.payload;
      localStorage.setItem("geeks4geeks", JSON.stringify(action.payload));
    },
    logOut: (state: initialState) => {
      localStorage.removeItem("geeks4geeks");
      state.user = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;
