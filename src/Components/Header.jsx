import React from "react";

export const Header = () => {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src="../Images/logo.png" alt="" />
        </div>
        <div className="links">
          <a href={undefined}>Home</a>
          <a href={undefined}>Shop</a>
          <a href={undefined}>Admin</a>
          <a href={undefined}>Blog</a>
        </div>
        <div className="icons">
          <div className="icon">
            <i className="fas fa-search"></i>
          </div>
          <div className="icon">
            <i className="fas fa-heart"></i>
          </div>
          <div className="icon">
            <i className="fas fa-shop"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};
