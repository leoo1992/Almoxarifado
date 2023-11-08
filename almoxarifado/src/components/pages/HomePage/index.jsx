import React, { useState } from 'react';
import "./home.css";
import NavPrincipal from "../../component/NavPrincipal";


const HomePage = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <NavPrincipal />
      <div className={`mt-0 p-0 d-flex vh-100 justify-content-center ${theme === "dark" ? "bg-dark" : "bg-light"}`}>
        
      </div>
    </>
  );
};

export default HomePage;
