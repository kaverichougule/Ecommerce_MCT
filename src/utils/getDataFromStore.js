import { doc, getDoc } from "firebase/firestore";
import { setCart, setItemCount } from "../Redux/CartSlice";
import { db } from "../Components/Firebase";

export const getDataFromStore = async (dispatch) => {
  try {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        console.log("Current user:", currentUser);

    if (!currentUser || !currentUser.email) {
      throw new Error("Current user not found or email not provided");
    }

    const docRef = doc(db, "users", currentUser.email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      if (Object.keys(docSnap.data()).includes("cart")) {
        dispatch(setCart({ type: "GETDATA", payload: docSnap.data().cart }));
      }
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching document:", error);
  }
};