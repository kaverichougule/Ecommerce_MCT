import React from "react";
import "../../assets/css/templatemo-hexashop.css";
import HomeMen from "../HomeContent/HomeMen";
import HomeAccessories from "../HomeContent/HomeAccessories";
import Groceries from "../HomeContent/Groceries";
import Laptop from "../HomeContent/Laptop";
import HomePageBanner from "./HomePageBanner";
function Home(props) {
  return (
    <div>
      {/*Start Home Head Section */}
        <HomePageBanner />
      {/*End Home Head Section  */}

      {/* Home Men Section Starts*/}
        <HomeMen />
      {/* Home Men Section Ends*/}

      {/* Home Accessories Section Starts*/}
        <HomeAccessories />
      {/* Home Accessories Section Ends*/}

      {/* Home Accessories Section Starts*/}
        <Groceries />
      {/* Home Accessories Section Ends*/}

      {/* Home Accessories Section Starts*/}
        <Laptop />
      {/* Home Accessories Section Ends*/}
    </div>
  );
}

export default Home;
