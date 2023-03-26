import React from "react";
import phone from "../assets/icons/phone.svg";

const Header = () => {
  return (
    <div className="bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-12 header-content d-flex justify-content-between">
            <div>Welcome to Our Store Hiscraves</div>
            <div>
              <img src={phone} className="img-fluid nav-icon me-3" alt="menu" />
              <span>Call Us: 1234567890</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
