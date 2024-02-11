import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function DisplayAll(props) {
  let { dataArray } = useSelector((state) => state.searchSlice);
  return (
    <>
      {dataArray.map((ele, index) => {
        const shortTitle =
          ele.title.length > 25 ? `${ele.title.slice(0, 25)}...` : ele.title;
        return (
          <article
            className="relative w-[30%] flex flex-col overflow-hidden rounded-lg border"
            key={index}
          >
            <Link to={"/singleProduct/" + ele.asin} className="aspect-square overflow-hidden p-2">
              <img
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                src={ele.image}
                alt=""
              />
            </Link>
            <div className="absolute top-0 m-2 rounded-full bg-white">
              <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                Sale
              </p>
            </div>
            <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
              <div className="mb-2 flex">
                <p className="mr-3 text-sm font-semibold">{ele.price}</p>
                <del className="text-xs text-gray-400">
                  {" "}
                  {ele.original_price}{" "}
                </del>
              </div>
              <Link to={"/singleProduct/" + ele.asin} className="mb-2 text-sm text-gray-400">{shortTitle}</Link>
            </div>
            <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
              <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                Add
              </div>
              <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                +
              </div>
            </button>
          </article>
        );
      })}
    </>
  );
}

export default DisplayAll;
