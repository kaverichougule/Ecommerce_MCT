import { createSlice } from "@reduxjs/toolkit"

const searchProduct={
    currentSearch:{},
    dataArray:[]
}

const searchSlice=createSlice({
    name:"search",
    initialState:searchProduct,
    reducers:{
        setCurrentSearch:(state,action)=>{
            state.currentSearch=action.payload;
        },
        setDataArray:(state,action)=>{
            state.dataArray=action.payload;
        }
    }
})

export const {setCurrentSearch,setDataArray}=searchSlice.actions;
export default searchSlice.reducer;