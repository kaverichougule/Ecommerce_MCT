import React from "react";
import ClothesData from "../../../assets/ProductData/Clothes.json";
function SideSection(props) {
  return (
    <div className="w-[100%]">
      <div className="h-full w-70 pb-10">
        <div className="flex h-full flex-grow flex-col rounded-br-lg rounded-tr-lg bg-white pt-5 shadow-md">
          <div className="flex mt-10 items-center px-4">
            <img
              className="h-12 w-auto max-w-full align-middle"
              src="/images/R-Wx_NHvZBci3KLrgXhp1.png"
              alt=""
            />
            <div className="flex ml-3 flex-col">
              <h3 className="font-medium">Shoppers Stop</h3>
              <p className="text-xs text-gray-500">{ClothesData.length}</p>
            </div>
          </div>

          <span className="ml-3 mt-10 mb-2 block text-s font-semibold text-gray-500">
            Filters
          </span>

          <div className="flex mt-3 flex-1 flex-col">
            <div className="">
              <div className="flex-1">
                <div
                  href="#"
                  title=""
                  className="flex cursor-pointer items-center border-l-4 border-l-rose-600 py-2 px-4 text-sm font-medium text-black-600 outline-none transition-all duration-100 ease-in-out focus:border-l-4"
                >
                  <div className="flex flex-col">
                    <div className="flex">
                      <input
                        type="radio"
                        id="Men"
                        name="fav_language"
                        value="Men"
                        className="mr-4"
                      />
                        <label for="Men">Men</label>
                    </div>
                     {" "}
                    <div className="flex">
                      <input
                        type="radio"
                        id="Female"
                        name="fav_language"
                        value="Female"
                        className="mr-4"
                      />
                        <label for="Female">Female</label>
                    </div>
                    <div className="flex">
                      <input
                        type="radio"
                        id="Boys"
                        name="fav_language"
                        value="Boys"
                        className="mr-4"
                      />
                        <label for="Boys">Boys</label>
                    </div>
                     {" "}
                    <div className="flex">
                      <input
                        type="radio"
                        id="Girls"
                        name="fav_language"
                        value="Girls"
                        className="mr-4"
                      />
                        <label for="Girls">Girls</label>
                    </div>
                  </div>
                </div>
              </div>

              <span className="ml-3 mt-10 mb-2 block text-s font-semibold text-gray-500">
                Categories
              </span>

              <div className="flex-1">
                <div
                  href="#"
                  title=""
                  className="flex cursor-pointer items-center border-l-4 border-l-rose-600 py-2 px-4 text-sm font-medium text-black-600 outline-none transition-all duration-100 ease-in-out focus:border-l-4"
                >
                  <div className="flex flex-col">
                    <div className="flex">
                      <input
                        type="checkbox"
                        id="Men"
                        name="fav_language"
                        value="Men"
                        className="mr-4"
                      />
                        <label for="Men">T-shirt</label>
                    </div>
                     {" "}
                    <div className="flex">
                      <input
                        type="checkbox"
                        id="Female"
                        name="fav_language"
                        value="Female"
                        className="mr-4"
                      />
                        <label for="Female">Shirt</label>
                    </div>
                    <div className="flex">
                      <input
                        type="checkbox"
                        id="Boys"
                        name="fav_language"
                        value="Boys"
                        className="mr-4"
                      />
                        <label for="Boys">Jeans</label>
                    </div>
                     {" "}
                    <div className="flex">
                      <input
                        type="checkbox"
                        id="Girls"
                        name="fav_language"
                        value="Girls"
                        className="mr-4"
                      />
                        <label for="Girls">Bottom Wears</label>
                    </div>
                  </div>
                </div>
              </div>

              <span className="ml-3 mt-10 mb-2 block text-s font-semibold text-gray-500">
                Price
              </span>

              <div className="flex-1">
                <div
                  href="#"
                  title=""
                  className="flex cursor-pointer items-center border-l-4 border-l-rose-600 py-2 px-4 text-sm font-medium text-black-600 outline-none transition-all duration-100 ease-in-out focus:border-l-4"
                >
                  <div className="flex flex-col">
                    <div className="flex">
                      <input
                        type="checkbox"
                        id="cost1"
                        name="fav_language"
                        value="cost1"
                        className="mr-4"
                      />
                        <label for="cost1">Rs. 65 to Rs. 5674</label>
                    </div>
                     {" "}
                    <div className="flex">
                      <input
                        type="checkbox"
                        id="cost2"
                        name="fav_language"
                        value="cost2"
                        className="mr-4"
                      />
                        <label for="cost2">Rs. 5674 to Rs. 11283</label>
                    </div>
                    <div className="flex">
                      <input
                        type="checkbox"
                        id="cost3"
                        name="fav_language"
                        value="cost3"
                        className="mr-4"
                      />
                        <label for="cost3">Rs. 11283 to Rs. 16892</label>
                    </div>
                     {" "}
                    <div className="flex">
                      <input
                        type="checkbox"
                        id="cost4"
                        name="fav_language"
                        value="cost4"
                        className="mr-4"
                      />
                        <label for="cost4">Rs. 16892 to Rs. 22501</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideSection;
