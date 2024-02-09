import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./AuthSlice";
import CartSlice from "./CartSlice";
import searchSlice from "./HeaderSlice";

export const Store=configureStore({
    reducer:{
        User:UserReducer,
        GetData:CartSlice,
        searchSlice,
    }
})