import { React, useState } from "react";
import "./styles.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShareFromSquare, faCubes, faBoxesStacked, faTableCells, faPlugCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {
    MDBBtn,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';

const Menu = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    const menuTooltip = (
        <Tooltip id="menu-tooltip">
            Menu
        </Tooltip>
    );

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

    const handleButtonRetirarClick = () => {
        window.location.href = '/retirar';
    };

    return (
        <>
            <OverlayTrigger placement="bottom" overlay={menuTooltip}>
                <MDBBtn
                    variant="primary"
                    onClick={toggleShow}
                    className='m-0 p-0 shadow d-flex justify-content-center align-content-center align-items-center fw-bold rounded-5 border'
                >
                    <FontAwesomeIcon icon={faBars} className='text-white shadow m-0 p-2 fw-bold fs-2' />
                </MDBBtn >
            </OverlayTrigger>
            <Offcanvas
                show={show}
                onHide={handleClose}
                placement='end'
                scroll
                backdrop
                keyboard
                autoFocus
                enforceFocus
                restoreFocus
                className="border-0 bg-primary hover-menu menu-tamanho border-black w-auto shadow-6-strong"
            >
                <Offcanvas.Header
                    closeButton
                    closeVariant='white'
                >
                    <Offcanvas.Title className="fs-4 fw-bold text-white text-store-nav" >
                        Menu
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>

                    <OverlayTrigger placement="bottom" overlay={retirarTooltip} delay={{ show: 250, hide: 400 }}>
                        <MDBBtn onClick={handleButtonRetirarClick}
                            className='p-3 m-0 bg-transparent btn-outline-success rounded-9 shadow-5-strong shadow-5-primary d-flex justify-content-center align-content-center align-items-center'>
                            <div className="d-flex justify-content-center align-content-center align-items-center rounded-9 p-0 m-0 ">
                                <FontAwesomeIcon
                                    icon={faCubes}
                                    className="p-0 m-0 text-center text-success w-100 h-100 d-flex justify-content-center align-content-center align-items-center'"
                                />
                            </div>
                        </MDBBtn>
                    </OverlayTrigger>

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

                    <OverlayTrigger placement="bottom" overlay={listarTooltip} delay={{ show: 250, hide: 400 }}>
                        <MDBBtn className='p-3 m-1 bg-transparent btn-outline-info rounded-9 shadow-5-strong shadow-5-primary'>
                            <div className="d-flex justify-content-center align-content-center align-items-center rounded-9 p-0 m-0 ">
                                <FontAwesomeIcon
                                    icon={faTableCells}
                                    className="p-0 m-0 text-center text-info w-100 h-100"
                                />
                            </div>
                        </MDBBtn>
                    </OverlayTrigger>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Menu;
