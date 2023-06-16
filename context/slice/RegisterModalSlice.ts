import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  isOpen: boolean;
};

const initialState: initialState = {
  isOpen: false,
};

const registerModalSlice = createSlice({
  name: "registerModalSlice",
  initialState,
  reducers: {
    setOpenRegisterModal: (state: initialState) => {
      state.isOpen = true;
    },
    onCloseRegisterModal: (state: initialState) => {
      state.isOpen = false;
    },
  },
});

export const { setOpenRegisterModal, onCloseRegisterModal } = registerModalSlice.actions;

export default registerModalSlice.reducer