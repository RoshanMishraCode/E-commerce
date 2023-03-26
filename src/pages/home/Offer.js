import React from "react";
import baggy from "../../assets/images/baggy.svg";
import winter from "../../assets/images/winter.svg";
import women from "../../assets/images/women.svg";
import beastDeal from "../../assets/images/beast-deal.svg";
import trendy from "../../assets/images/trendy.svg";

const Offer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 pb-4">
          <img src={baggy} className="img-fluid w-100" alt="baggy" />
        </div>
        <div className="col-md-6">
          <img src={winter} className="img-fluid w-100" alt="winter" />
        </div>
      </div>
      <div className="row py-4">
        <div className="col-md-4 pb-4">
          <img src={women} className="img-fluid w-100" alt="women" />
        </div>
        <div className="col-md-4 pb-4">
          <img src={beastDeal} className="img-fluid w-100" alt="beast-deal" />
        </div>
        <div className="col-md-4 pb-4">
          <img src={trendy} className="img-fluid w-100" alt="baggy" />
        </div>
      </div>
    </div>
  );
};

export default Offer;
