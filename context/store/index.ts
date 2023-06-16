import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector } from "react-redux"
import LoginModalSlice from "../slice/LoginModalSlice"
import RegisterModalSlice from "../slice/RegisterModalSlice"
import authSlice from "../slice/authSlice"

const store = configureStore({
    reducer: {
        loginModal: LoginModalSlice,
        registerModal: RegisterModalSlice,
        auth: authSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store