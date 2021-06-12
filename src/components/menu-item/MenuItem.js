import React from "react";
import "./MenuItem.scss";

const MenuItem = ({ title, imgUrl, size }) => {
  return (
    <div className={`${size} menu-layout`}>
      <div className="menu-item">
        <div
          style={{ backgroundImage: `url(${imgUrl})` }}
          className="background-image"
        ></div>
        <div className="content">
          <h2 className="title">{title.toUpperCase()}</h2>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
