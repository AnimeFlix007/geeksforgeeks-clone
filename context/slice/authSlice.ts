import { User } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  user: User | null;
};

type Action = {
  payload: User | null;
};

const loggedInUser: () => User | null = () => {
  if (typeof window !== "undefined") {
    const item = window.localStorage.getItem("geeks4geeks");
    return item ? JSON.parse(item) : null;
  } else {
    return null;
  }
};

const initialState: initialState = {
  user: loggedInUser(),
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
