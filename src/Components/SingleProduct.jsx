import React, { useEffect } from "react";
import SingleProductData from "../assets/ProductData/SingleProduct.json";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setItemCount,
  setSingleProduct,
  setMainImage,
  setPrice,
} from "../Redux/CartSlice";
import axios from "axios";
import { getDataFromStore } from "../utils/getDataFromStore";

function SingleProduct(props) {
  const param = useParams();
  const dispatch = useDispatch();
  const { itemCount, singleProduct, mainImage, price, cartItems } = useSelector(
    (state) => state.GetData
  );

  const isLoggedIn = useSelector((state) => state.User.isLoggedIn);

  const apiKey = import.meta.env.VITE_AMAZON_ASIN;

  useEffect(() => {
    let i = 0;
    const fetchProductData = async () => {
      console.log(param.asin);
      const params = {
        api_key: apiKey,
        amazon_domain: "amazon.in",
        asin: param.asin,
        type: "product",
      };

      try {
        const response = await axios.get(
          "https://api.asindataapi.com/request",
          { params }
        );
        console.log(response);
        console.log({ ...response.data, itemCount: cartItems[i]?.itemCount });
        dispatch(
          setSingleProduct({
            ...response.data,
            itemCount: cartItems[i]?.itemCount,
          })
        );
        dispatch(setMainImage(response.data.product.main_image.link));

        const price =
          // response.data.product.buybox_winner.price.raw ||
          response.data.product.buybox_winner.rrp.raw;
        dispatch(setPrice(price));
        i++;
        // return { ...response.data, cartItemCount };
      } catch (error) {
        console.error(error);
        return null;
      }
    };
    fetchProductData();

    return () => {
      dispatch(setSingleProduct({}));
      dispatch(setMainImage(""));
      dispatch(setPrice(0));
    };
  }, [param.asin]);

  useEffect(() => {
    getDataFromStore(dispatch);
  }, [isLoggedIn]);

  return (
    Object.keys(singleProduct).length !== 0 ? 
    <div>
      <section className="section" id="product">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="left-images">
                <img src={mainImage} alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="right-content">
                <h4>{singleProduct.product.title}</h4>
                <span className="price">
                  {price}
                </span>
                <ul className="stars">
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                </ul>
                <span>
                  {SingleProductData.product.feature_bullets.map(
                    (ele, index) => {
                      <span>{ele}</span>;
                    }
                  )}
                </span>
                <div className="quantity-content">
                  <div className="left-content">
                    <h6>No. of Orders</h6>
                  </div>
                  <div className="right-content">
                    <div className="quantity buttons_added">
                      <input
                        type="button"
                        defaultValue="-"
                        className="minus"
                        onClick={() => {
                          if (itemCount > 1) {
                            dispatch(setItemCount(itemCount - 1));
                          }
                        }}
                      />
                      <input
                        type="number"
                        step={1}
                        min={1}
                        max=""
                        name="quantity"
                        title="Qty"
                        className="input-text qty text"
                        size={4}
                        pattern=""
                        inputMode=""
                        value={itemCount}
                      />
                      <input
                        type="button"
                        defaultValue="+"
                        className="plus"
                        onClick={() => {
                          dispatch(setItemCount(itemCount + 1));
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="total">
                  <h4>Total: {price}</h4>
                  <div className="main-border-button" onClick={() =>
                    dispatch(
                      setCart({
                        type: "ADDEDTOCART",
                        payload: {
                          itemCount: itemCount,
                          itemId: param.asin,
                        },
                      }),
                    )
                  }>
                    <a href="#">Add To Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    : "Loading..."
  );
}

export default SingleProduct;
