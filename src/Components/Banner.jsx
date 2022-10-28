import React from "react";

export const Banner = () => {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="content">
            <p>NEW TREND 2022</p>
            <h3>Men's Collection</h3>
            <button className="btn">SHOP NOW</button>
          </div>
          <div className="img-container">
            <img src="../Images/banner.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
