import React, { useState } from 'react';
import "./home.css";
import NavPrincipal from "../../component/NavPrincipal";
import ProductCard from "../../component/ProductCard";


const HomePage = () => {
  // eslint-disable-next-line
  const [theme, setTheme] = useState("dark");

  const updateTheme = (newTheme) => {
    setTheme(newTheme);
  };


  return (
    <>
      <NavPrincipal updateTheme={updateTheme}/>
      <div className={`mt-0 p-0 d-flex vh-100 w-100 justify-content-center ${theme === "dark" ? "bg-dark" : "bg-light"}`}>
        <ProductCard/>
        <ProductCard/>
      </div>
    </>
  );
};

export default HomePage;
