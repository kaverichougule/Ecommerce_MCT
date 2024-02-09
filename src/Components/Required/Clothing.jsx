import React from "react";
import ClothingBanner from "../CategoriesPage/Clothing/ClothingBanner";
import DisplayAll from "../CategoriesPage/Common/DisplayAll";
import SideSection from "../CategoriesPage/Common/SideSection";
import HeaderCategories from "../CategoriesPage/HeaderCategories";

function Clothing(props) {
  return (
    <div>
      <ClothingBanner />

      <div className="flex w-[100%] gap-1">
        <section className="bg-white py-2 text-gray-700 sm:py-10 lg:py-15 w-[25%]">
            <SideSection />
        </section>

        <section className="bg-white py-10 text-gray-700 sm:py-16 lg:py-20 w-[100%]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Clothing
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
            <HeaderCategories />
          </div>
        </div>
      </section>
      
      </div>
    </div>
  );
}

export default Clothing;
