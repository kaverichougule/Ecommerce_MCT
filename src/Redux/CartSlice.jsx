import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../Components/Firebase";
import { getAuth } from "firebase/auth";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentData: [],
  cartItems: [],
  itemCount:1,
  singleProduct:{},
  mainImage: "",
  price: 0,
  productData : [],
  totalCartAmount: 0,
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
    setCart: (state, action) => {
      if (action.payload.type === "ADDEDTOCART") {
        state.cartItems = [...state.cartItems, action.payload.payload];
        addToCart(state.cartItems, action.payload.payload);
        console.log("called")
      } else if(action.payload.type === "GETDATA") {
        state.cartItems = [...action.payload.payload];
      }else if(action.payload.type === "CLEARDATA"){
        state.cartItems = [];
      }
    },
    setItemCount:(state,action)=>{
      state.itemCount=action.payload;
    },
    setSingleProduct : (state, action) => {
      state.singleProduct = action.payload;
    },
    setMainImage: (state, action) => {
      state.mainImage = action.payload;
    },
    setPrice : (state, action) => {
      state.price = action.payload;
    },
    setProductData : (state, action) => {
      state.productData = action.payload;
    },
    setTotalCartAmount : (state, action) => {
      state.totalCartAmount = action.payload;
    },
  },
});

// const getDocument = async (ele) => {
//   // Use auth.currentUser to get the current user

//   const docRef = doc(db, "users", auth.currentUser.email);
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//     await updateDoc(docRef, {
//         regions: arrayUnion(...ele)
//     });
//   } else {
//     console.log("No such document!");
//   }
// };



export const addToCart = async (cartItems, cartAsin) => {
  try {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser || !currentUser.email) {
      throw new Error("Current user not found or email not provided");
    }

    const docRef = doc(db, "users", currentUser.email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let updatedCart = [];
      const data = docSnap.data();

      if (data.cart) {
        // Check if the item exists in the cart
        const existingIndex = data.cart.findIndex(item => item.itemId === cartAsin.itemId);
        if (existingIndex !== -1) {
          // Item exists, update its count
          updatedCart = data.cart.map((item, index) => {
            if (index === existingIndex) {
              return { ...item, itemCount: cartAsin.itemCount };
            }
            return item;
          });
        } else {
          // Item does not exist, add new item
          updatedCart = [...data.cart, cartAsin];
        }
      } else {
        // Cart does not exist, create new with the item
        updatedCart = [cartAsin];
      }

      // Update the document with the new or updated cart
      await updateDoc(docRef, { cart: updatedCart });
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error updating document:", error);
  }
};

export const fetchCartData = async () => {
  try {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser || !currentUser.email) {
      throw new Error("Current user not found or email not provided");
    }

    const docRef = doc(db, "users", currentUser.email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists() && docSnap.data().cart) {
      // Return the cart data
      return docSnap.data().cart;
    } else {
      console.log("No cart data found!");
      return [];
    }
  } catch (error) {
    console.error("Error fetching cart data:", error);
    return [];
  }
};

// Fix the action name to be consistent
export const { getCurrentData,setItemCount,setPrice, setMainImage, setSingleProduct, setCart, setProductData, setTotalCartAmount } = dataSlice.actions;
export default dataSlice.reducer;
