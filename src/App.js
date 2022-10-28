import {Header} from "./Components/Header";
import React from "react";
import { Banner } from "./Components/Banner";
import { Services } from "./Components/Services";
import { Products } from "./Components/Products";
import { Subscribe } from "./Components/Subscribe";
import { Footer } from "./Components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Banner />
    <Services />
    <Products />
    <Subscribe />
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
