import React from "react";
import trendy_data from "./trendy_data";
import line from "../../assets/images/Line.svg";
import add_card from "../../assets/icons/add_card.svg";
import dill from "../../assets/icons/dill.svg";
import share from "../../assets/icons/share.svg";

const TrendyProduct = () => {
  return (
    <div className="container">
      <div className="row text-center pb-4">
        <div className="col-md-4 d-none d-md-block">
          <img src={line} className="img-fluid" alt="line" />
        </div>
        <div className="col-md-4 fw-bold">
          <h1>Trending T-Shirts</h1>
        </div>
        <div className="col-md-4 d-none d-md-block">
          <img src={line} className="img-fluid" alt="line" />
        </div>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {trendy_data?.map((curElem) => {
          return (
            <div key={curElem.id} className="col">
              <div className="card border-0">
                <div className="card-main">
                  <img
                    src={curElem.image}
                    className="card-img-top"
                    alt={curElem.product_name}
                  />
                  <div className="card-btn">
                    <img className="img-fluid" src={add_card} alt="add-card" />
                    <img className="img-fluid" src={dill} alt="dill" />
                    <img className="img-fluid" src={share} alt="share" />
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">
                    {curElem.product_name}
                  </h5>
                  <div className="d-flex justify-content-center align-items-center">
                    <strong className="fs-3">₹{curElem.sale_price}</strong>
                    <del className="text-danger ms-2">
                      {curElem.product_price}
                    </del>
                  </div>
                  <div className="d-flex justify-content-between">
                    {curElem.size.map((size) => {
                      return (
                        <button key={size} className="btn border">
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center my-5">
        <button className="btn view-more">VIEW ALL</button>
      </div>
    </div>
  );
};

export default TrendyProduct;
