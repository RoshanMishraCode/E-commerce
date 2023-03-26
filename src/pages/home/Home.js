import React, { lazy } from "react";
import banner from "../../assets/images/banner.svg";
import cat_data from "./cat_data";
import banner2 from "../../assets/images/banner2.svg";

const Offer = lazy(() => import("./Offer"));
const TrendyProduct = lazy(() => import("./TrendyProduct"));

const Home = () => {
  return (
    <section>
      <img src={banner} className="img-fluid w-100" alt="banner" />
      <div className="container text-center">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-2 g-lg-3 py-5">
          {cat_data.map((curElem) => {
            return (
              <div key={curElem.id} className="col">
                <div
                  style={{ backgroundColor: curElem.color, cursor: "pointer" }}
                  className="rounded-circle"
                >
                  <img
                    src={curElem.image}
                    className="img-fluid w-100 h-100"
                    alt={curElem.cat_name}
                  />
                </div>
                <h6 className="py-3">{curElem.cat_name}</h6>
              </div>
            );
          })}
        </div>
      </div>
      <Offer />
      <TrendyProduct />
      <img src={banner2} className="img-fluid w-100" alt="banner" />
    </section>
  );
};

export default Home;
