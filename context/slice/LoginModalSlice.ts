import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  isOpen: boolean;
};

const initialState: initialState = {
  isOpen: false,
};

const loginModalSlice = createSlice({
  name: "loginModalSlice",
  initialState,
  reducers: {
    setLoginModalOpen: (state: initialState) => {
      state.isOpen = true;
    },
    onCloseLoginModal: (state: initialState) => {
      state.isOpen = false;
    },
  },
});

export const { setLoginModalOpen, onCloseLoginModal } = loginModalSlice.actions;

export default loginModalSlice.reducer