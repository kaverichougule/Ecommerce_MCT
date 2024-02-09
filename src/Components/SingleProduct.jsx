import React from "react";
import SingleProductData from "../assets/ProductData/SingleProduct.json"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setItemCount } from "../Redux/CartSlice";
function SingleProduct(props) {
    const params = useParams();
    const dispatch=useDispatch();
    const {itemCount}=useSelector((state)=>state.GetData);

  return (
    <div>
      <section className="section" id="product">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="left-images">
                <img src="assets/images/single-product-01.jpg" alt="" />
                <img src="assets/images/single-product-02.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="right-content">
                <h4>{SingleProductData.product.title}</h4>
                <span className="price">{SingleProductData.product.buybox_winner.price.raw}</span>
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
                  {
                    SingleProductData.product.feature_bullets.map((ele,index)=>{
                        <span>{ele}</span>
                    })
                  }
                </span>
                <div className="quantity-content">
                  <div className="left-content">
                    <h6>No. of Orders</h6>
                  </div>
                  <div className="right-content">
                    <div className="quantity buttons_added">
                      <input type="button" defaultValue="-" className="minus" 
                      onClick={()=>{
                        if(itemCount>1){
                            dispatch(setItemCount(itemCount-1));
                        }
                      }}
                      />
                      <input
                        type="number"
                        step={1}
                        min={1}
                        max=""
                        name="quantity"
                        defaultValue={1}
                        title="Qty"
                        className="input-text qty text"
                        size={4}
                        pattern=""
                        inputMode=""
                        value={itemCount}
                      />
                      <input type="button" defaultValue="+" className="plus" onClick={()=>{
                        dispatch(setItemCount(itemCount+1));
                      }} />
                    </div>
                  </div>
                </div>
                <div className="total">
                  <h4>Total: $210.00</h4>
                  <div className="main-border-button">
                    <a href="#">Add To Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SingleProduct;
