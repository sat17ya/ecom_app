import React, { useState } from "react";

export const Services = () => {
  const [services] = useState([
    {
      img: "../Images/Delivery-icon.jpg",
      name: "Free Delivery",
      text: "For all order over 99$",
    },
    {
      img: "../Images/Return-icon.jpg",
      name: "30 Days Return",
      text: "If goods have Problems",
    },
    {
      img: "../Images/Payment-icon.jpg",
      name: "Secure Payment",
      text: "100% secure payment",
    },
    {
      img: "/images/Support-icon.jpg",
      name: "24/7 Support",
      text: "Dedicated support",
    },
  ]);
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-wrapper">
          {services.map((service) => (
            <div key={service.name} className="service">
              <div className="img-container">
                <img src={service.img} alt="" />
              </div>
              <div className="content">
                <h3>{service.name}</h3>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
