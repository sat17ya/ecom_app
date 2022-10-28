import React from 'react'

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
              <a href="#">Home</a>
              <a href="#">Shop</a>
              <a href="#">Blog</a>
              <a href="#">Admin</a>
            </div>
          </div>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
