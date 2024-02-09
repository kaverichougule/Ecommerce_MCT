import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count:1,
}

const count=createSlice({
    name:"count",
    initialState:initialState,
    reducers:{
        setCount:(state,action)=>{
            state.count=action.payload;
        }
    }
})

export const {setCount}=count.actions;
export default count.reducer;