import React, { useState } from 'react';
import "./home.css";
import NavPrincipal from "../../component/NavPrincipal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare, faCubes, faBoxesStacked, faTableCells, faPlugCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import {
  MDBContainer,
  MDBBtn,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';

const HomePage = () => {
  // eslint-disable-next-line
  const [theme, setTheme] = useState("dark");

  const updateTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const retirarTooltip = (
    <Tooltip className="custom-tooltip p-0 m-0" id="nome-produto" delay={{ show: 250, hide: 400 }}>Retirada de Materiais</Tooltip>
  );

  const entradaTooltip = (
    <Tooltip className="custom-tooltip2 p-0 m-0" id="nome-produto" delay={{ show: 250, hide: 400 }}>Entrada de Materiais</Tooltip>
  );

  const alterarTooltip = (
    <Tooltip className="custom-tooltip4 p-0 m-0" id="nome-produto" delay={{ show: 250, hide: 400 }}>Alterar Material</Tooltip>
  );
  
  const removerTooltip = (
    <Tooltip className="custom-tooltip5 p-0 m-0" id="nome-produto" delay={{ show: 250, hide: 400 }}>Desativar Material</Tooltip>
  );
  const listarTooltip = (
    <Tooltip className="custom-tooltip3 p-0 m-0" id="nome-produto" delay={{ show: 250, hide: 400 }}>Listar Materiais</Tooltip>
  );

  return (
    <>
      <NavPrincipal updateTheme={updateTheme} disableCart={true} disableHome={true} className='w-100 vw-100 d-flex' />
      <MDBContainer fluid className={`m-0 p-0 w-100 vh-100 ${theme === "dark" ? "bg-dark data-bs-theme-dark" : "bg-light data-bs-theme-light"}`}>

        <MDBRow className='p-2 m-2 d-flex justify-content-start align-content-center align-items-center row-cols-2 row-cols-sm-4 row-cols-md-6 row-cols-lg-8 row-cols-xl-10 g-5'>
          <MDBCol className='d-flex justify-content-center align-content-center align-items-center'>
            <OverlayTrigger placement="bottom" overlay={retirarTooltip} delay={{ show: 250, hide: 400 }}>
              <MDBBtn className='p-3 m-0 bg-transparent btn-outline-success rounded-9 shadow-5-strong shadow-5-primary d-flex justify-content-center align-content-center align-items-center'>
                <div className="d-flex justify-content-center align-content-center align-items-center rounded-9 p-0 m-0 ">
                  <FontAwesomeIcon
                    icon={faCubes}
                    className="p-0 m-0 text-center text-success w-100 h-100 d-flex justify-content-center align-content-center align-items-center'"
                  />
                </div>
              </MDBBtn>
            </OverlayTrigger>
          </MDBCol>

          <MDBCol className='d-flex justify-content-center align-content-center align-items-center'>
            <OverlayTrigger placement="bottom" overlay={entradaTooltip} delay={{ show: 250, hide: 400 }}>
              <MDBBtn className='p-3 m-0 bg-transparent btn-outline-primary rounded-9 shadow-5-strong shadow-5-primary'>
                <div className="d-flex justify-content-center align-content-center align-items-center rounded-9 p-0 m-0 ">
                  <FontAwesomeIcon
                    icon={faShareFromSquare}
                    className="p-0 m-0 text-center text-primary w-100 h-100"
                  />
                </div>
              </MDBBtn>
            </OverlayTrigger>
          </MDBCol>

          <MDBCol className='d-flex justify-content-center align-content-center align-items-center'>
            <OverlayTrigger placement="bottom" overlay={alterarTooltip} delay={{ show: 250, hide: 400 }}>
              <MDBBtn className='p-3 m-0 bg-transparent btn-outline-warning rounded-9 shadow-5-strong shadow-5-primary'>
                <div className="d-flex justify-content-center align-content-center align-items-center rounded-9 p-0 m-0 ">
                  <FontAwesomeIcon
                    icon={faBoxesStacked}
                    className="p-0 m-0 text-center text-warning w-100 h-100"
                  />
                </div>
              </MDBBtn>
            </OverlayTrigger>
          </MDBCol>

          <MDBCol className='d-flex justify-content-center align-content-center align-items-center'>
            <OverlayTrigger placement="bottom" overlay={removerTooltip} delay={{ show: 250, hide: 400 }}>
              <MDBBtn className='p-3 m-0 bg-transparent btn-outline-danger rounded-9 shadow-5-strong shadow-5-primary'>
                <div className="d-flex justify-content-center align-content-center align-items-center rounded-9 p-0 m-0 ">
                  <FontAwesomeIcon
                    icon={faPlugCircleExclamation}
                    className="p-0 m-0 text-center text-danger w-100 h-100"
                  />
                </div>
              </MDBBtn>
            </OverlayTrigger>
          </MDBCol>

          <MDBCol className='d-flex justify-content-center align-content-center align-items-center'>
            <OverlayTrigger placement="bottom" overlay={listarTooltip} delay={{ show: 250, hide: 400 }}>
              <MDBBtn className='p-3 m-0 bg-transparent btn-outline-info rounded-9 shadow-5-strong shadow-5-primary'>
                <div className="d-flex justify-content-center align-content-center align-items-center rounded-9 p-0 m-0 ">
                  <FontAwesomeIcon
                    icon={faTableCells}
                    className="p-0 m-0 text-center text-info w-100 h-100"
                  />
                </div>
              </MDBBtn>
            </OverlayTrigger>
          </MDBCol>
        </MDBRow>

      </MDBContainer>
    </>
  );
};

export default HomePage;
