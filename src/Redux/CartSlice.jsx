import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../Components/Firebase";
import { getAuth } from "firebase/auth";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentData: [],
  itemCount:1,
};

const auth = getAuth();
const dataSlice = createSlice({
  name: "GetData",
  initialState: initialState,
  reducers: {
    getCurrentData: (state, action) => {
      state.currentData = [...state.currentData, action.payload];
      getDocument(state.currentData)
    },
    setItemCount:(state,action)=>{
      state.itemCount=action.payload;
    }
  },
});

const getDocument = async (ele) => {
  // Use auth.currentUser to get the current user

  const docRef = doc(db, "users", auth.currentUser.email);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    await updateDoc(docRef, {
        regions: arrayUnion(...ele)
    });
  } else {
    console.log("No such document!");
  }
};

// Fix the action name to be consistent
export const { getCurrentData,setItemCount } = dataSlice.actions;
export default dataSlice.reducer;
