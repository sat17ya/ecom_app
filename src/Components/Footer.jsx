import React from 'react'
import {Link} from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper">
          <div className="img-container">
            <img src="../Images/PAYMENT.jpg" alt="" />
          </div>
          <div className="content">
            <div className="logo">
              <img src="../Images/logo.png" alt="" />
            </div>
            <p>© Copyright 2022 Plus.</p>
            <div className="links">
              <Link to="#">Home</Link>
              <Link to="#">Shop</Link>
              <Link to="#">Blog</Link>
              <Link to="#">Admin</Link>
            </div>
          </div>
          <div className="social-icons">
            <Link to="#">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-youtube"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
