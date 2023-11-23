/* eslint-disable no-undef */
import React, { useState } from 'react';
import './retirar.css';
import NavPrincipal from '../../component/NavPrincipal';
import ProductCard from '../../component/ProductCard';
import {
  MDBRow,
  MDBContainer,
} from 'mdb-react-ui-kit';

const RetiradaPage = () => {
  // eslint-disable-next-line
  const [theme, setTheme] = useState("dark");

  const updateTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <>
      <NavPrincipal updateTheme={updateTheme} disableCart={false} disableHome={false} className="w-100 vw-100 d-flex" />
      <MDBContainer fluid className={`m-0 p-0 pt-4 w-100 vh-100 ${theme === 'dark' ? 'bg-dark data-bs-theme-dark text-white' : 'bg-light data-bs-theme-light text-black'}`}>
        <h1 className="text-center">Retirada</h1>
        <MDBRow className="p-0 m-0 d-flex justify-content-around align-content-around align-items-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
          <ProductCard productName="Martelo" />
          <ProductCard productName="Prego" productImg={require('../../images/prego.webp')} />
          <ProductCard productName="Alicate" />
          <ProductCard productName="Chave de Fenda" />
          <ProductCard productName="Chave de Boca" />
          <ProductCard productName="Parafuso" />
          <ProductCard productName="Marreta" />
          <ProductCard productName="Balde" />
          <ProductCard productName="Trincha" />
          <ProductCard productName="Anilha" />
          <ProductCard productName="Porca" />
          <ProductCard productName="Arruela" />
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default RetiradaPage;
