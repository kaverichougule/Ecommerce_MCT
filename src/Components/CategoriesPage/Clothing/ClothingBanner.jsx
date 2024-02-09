import React from "react";
import Carousel from "nuka-carousel";
import BannerImgData from "../../../assets/ProductData/Banner.json"
function ClothingBanner(props) {
    const filteredData=BannerImgData.filter(item=> item.section==="Clothing")
    console.log(filteredData);
  return (
    <div>
        {
            filteredData.map((item, index) => (
                <Carousel key={index}
                    wrapAround={true}
                >
                    {item.address.map((ele, idx) => (
                        <img src={ele.img} />
                    ))}
                </Carousel>
            ))
        }
    
    </div>
  );
}

export default ClothingBanner;
