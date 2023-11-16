import React, { useState } from 'react';
import "./home.css";
import NavPrincipal from "../../component/NavPrincipal";
import ProductCard from "../../component/ProductCard";
import {
  MDBRow,
  MDBContainer,
} from 'mdb-react-ui-kit';

const HomePage = () => {
  // eslint-disable-next-line
  const [theme, setTheme] = useState("dark");

  const updateTheme = (newTheme) => {
    setTheme(newTheme);
  };


  return (
    <>
      <NavPrincipal updateTheme={updateTheme} className='w-auto d-flex' />
        <MDBContainer fluid className={`m-0 p-0 pt-4 w-100 vh-100 ${theme === "dark" ? "bg-dark" : "bg-light"}`}>
          <MDBRow className='d-flex justify-content-around align-content-around align-items-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4'>
            <ProductCard productName="Martelo"  />
            <ProductCard productName="Prego" productImg={require('../../images/prego.png')}/>
            <ProductCard productName="Alicate" />
            <ProductCard productName="Chave de Fenda" />
            <ProductCard productName="Chave de Fenda" />
            <ProductCard productName="Chave de Fenda" />
            <ProductCard productName="Chave de Fenda" />
            <ProductCard productName="Chave de Fenda" />
            <ProductCard productName="Chave de Fenda" />
            <ProductCard productName="Chave de Fenda" />
            <ProductCard productName="Chave de Fenda" />
            <ProductCard productName="Chave de Fenda" />
          </MDBRow>
        </MDBContainer>
    </>
  );
};

export default HomePage;
