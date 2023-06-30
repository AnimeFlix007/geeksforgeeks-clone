import { createSlice } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";

type initialState = {
  user:  DocumentData | undefined
};

type Action = {
  payload:  DocumentData | undefined
};

const loggedInUser: () =>  DocumentData | undefined = () => {
  if (typeof window !== "undefined") {
    const item = window.localStorage.getItem("geeks4geeks");
    return item ? JSON.parse(item) : undefined;
  } else {
    return undefined;
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
      state.user = undefined;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;
