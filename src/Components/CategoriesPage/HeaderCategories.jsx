import React from "react";
import ClothingData from "../../assets/ProductData/Clothes.json"
import GroceriesData from "../../assets/ProductData/Groceries.json";
import AccessoriesData from "../../assets/ProductData/Accessories.json";
import LaptopData from "../../assets/ProductData/Laptop.json";
import DisplayAll from "./Common/DisplayAll";
import { useParams } from "react-router-dom";
import { setDataArray } from "../../Redux/HeaderSlice";
import { useDispatch } from "react-redux";

function HeaderCategories(props) {
  const { category } = useParams();
  const dispatch=useDispatch();
  
  switch (category) {
    case "clothing":
        dispatch(setDataArray(ClothingData));
        break;
    case "grocery":
        dispatch(setDataArray(GroceriesData));
        break;
    case "accessories":
        dispatch(setDataArray(AccessoriesData));    
        break;
    case "laptops":
        dispatch(setDataArray(LaptopData));
        break;
    default:
        dispatch(setDataArray());
        break;
  }
  return (
    <div>
      <DisplayAll  />
    </div>
  );
}

export default HeaderCategories;
