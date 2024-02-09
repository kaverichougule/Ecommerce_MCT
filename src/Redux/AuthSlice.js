import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import firebaseApp from "../Components/Firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../Components/Firebase";


const initialState = {
  currentUser: {},
  isLoggedIn: false,
};
const auth = getAuth();

const userSlice = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userAuthentication.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userAuthentication.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentUser = action.payload;
        localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
        if (Object.keys(state.currentUser).length !== 0) {
          setDoc(doc(db, "users", state.currentUser.email), state.currentUser);
        }
      })
      .addCase(userAuthentication.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const userAuthentication = createAsyncThunk(
  "auth/authAsync",
  async ({ type, email, password }) => {
    try {
      let user = {};

      switch (type) {
        case "SIGNUP":
          const signUpResponse = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          user = signUpResponse.user.providerData[0];
          break;
        case "LOGIN":
          const signInResponse = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          user = signInResponse.user.providerData[0];
          break;
        case "SIGNOUT":
          signOut(auth);
          break;
        default:
          throw new Error("Invalid authentication type");
      }

      return user;
    } catch (error) {
      console.error(error.code, error.message);
    }
  }
);
export const { setCurrentUser, setLoggedIn } = userSlice.actions;
export default userSlice.reducer;
