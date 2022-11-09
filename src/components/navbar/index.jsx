import React from "react";
import "./style.scss";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_logo">
        <p>TM Sport</p>
      </div>

      <div className="navbar-search">
        <input type="text" placeholder="Bạn cần gì hôm nay?" />
      </div>

      <div className="navbar-options"></div>
    </div>
  );
};

export default Navbar;
