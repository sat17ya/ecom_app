import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src="../Images/Plus.png" alt="" />
        </div>
        <div className="links">
          <Link to={undefined}>Home</Link>
          <Link to={undefined}>Shop</Link>
          <Link to={undefined}>Admin</Link>
          <Link to={undefined}>Blog</Link>
        </div>
        <div className="icons">
          <div className="icon">
            <i className="fas fa-search"></i>
          </div>
          <div className="icon">
            <span className="number">3</span>
            <i className="far fa-heart"></i>
          </div>
          <div className="icon">
            <span className="number">5</span>
            <i className="fas fa-shop"></i>
          </div>
          <div onClick={() => setMobileNav(!mobileNav)} className="menu">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </div>
      <div className={`mobile-nav ${mobileNav ? "active" : ""}`}>
        <div className="links">
          <Link onClick={() => setMobileNav(!mobileNav)} to="#">
            Home
          </Link>
          <Link onClick={() => setMobileNav(!mobileNav)} to="#">
            Shop
          </Link>
          <Link onClick={() => setMobileNav(!mobileNav)} to="#">
            Blog
          </Link>
          <Link onClick={() => setMobileNav(!mobileNav)} to="#">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
};