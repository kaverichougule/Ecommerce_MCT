import React from "react";
import data from "../../assets/ProductData/Laptop.json";
import img1 from "../../assets/images/men-01.jpg";
import Carousel from "nuka-carousel";
import ProductDisplay from "./ProductDisplay";
function Laptop(props) {
  return (
    <section className="section" id="men">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>Laptops</h2>
              <span>
                Details to details is what makes Hexashop different from the
                other themes.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Carousel
          tabbed={false}
          cellSpacing={20}
          slidesToScroll={5}
          slidesToShow={5}
          slideCount={5}
          wrapAround={true}
          autoplay={true}
        >
          {data.map((ele, index) => {
            const titleLength =
              ele.title.length > 25
                ? `${ele.title.slice(0, 25)}...`
                : ele.title;
            return (
              <ProductDisplay key={index} image={ele.image} original_price={ele.original_price} price={ele.price} titleLength={titleLength} asin={ele.asin} />
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}

export default Laptop;
