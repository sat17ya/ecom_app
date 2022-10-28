import {Header} from "./Components/Header";
import React from "react";
import { Banner } from "./Components/Banner";
import { Services } from "./Components/Services";
import { Products } from "./Components/Products";
import { Subscribe } from "./Components/Subscribe";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
    <Header />
    <Banner />
    <Services />
    <Products />
    <Subscribe />
    <Footer />
    </>
  );
}

export default App;
