import React from "react";
import ClothingData from "../../assets/ProductData/Clothes.json"
import GroceriesData from "../../assets/ProductData/Groceries.json";
import AccessoriesData from "../../assets/ProductData/Accessories.json";
import LaptopData from "../../assets/ProductData/Laptop.json";
import DisplayAll from "./Common/DisplayAll";
import { useLocation } from "react-router-dom";
import { setDataArray } from "../../Redux/HeaderSlice";
import { useDispatch } from "react-redux";

function HeaderCategories(props) {
  const location = useLocation();
  const dispatch=useDispatch();
  
  switch (location.pathname) {
    case "/clothing":
        dispatch(setDataArray(ClothingData));
        break;
    case "/groceries":
        dispatch(setDataArray(GroceriesData));
        break;
    case "/accessories":
        dispatch(setDataArray(AccessoriesData));    
        break;
    case "/electronics":
        dispatch(setDataArray(LaptopData));
        break;
    default:
        dispatch(setDataArray([]));
        break;
  }
  return (
    <div className="flex items-center justify-between w-full flex-wrap gap-4">
      <DisplayAll  />
    </div>
  );
}

export default HeaderCategories;
