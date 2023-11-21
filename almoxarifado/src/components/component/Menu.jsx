import { React, useState } from "react";
import "./styles.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShareFromSquare, faCubes, faBoxesStacked, faTableCells, faPlugCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from 'react-router-dom';
import {
    MDBBtn,
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
                    <ul className="list-unstyled p-1">
                        <li className="m-3">
                            <Link to="/retirar">
                                <MDBBtn
                                    className='menu-btn-tamanho btn-success border rounded-9 shadow-5-strong shadow-5-primary d-flex justify-content-center align-content-center align-items-center'>
                                    <div className="d-flex flex-row align-items-center p-0 m-0 gap-3">
                                        <div className="d-flex flex-column col-3 justify-content-start align-content-start">
                                            <FontAwesomeIcon
                                                icon={faCubes}
                                                className="text-white me-2 fs-3 text-start"
                                            />
                                        </div>
                                        <div className="d-flex col-9 justify-content-center align-content-center">
                                            <h6 className="p-0 m-0 text-white text-center ">Retirada</h6>
                                        </div>
                                    </div>
                                </MDBBtn>
                            </Link>
                        </li>
                        <li className="m-3">
                            <Link to="/entrada">
                                <MDBBtn
                                    className='menu-btn-tamanho bg-primary-emphasis border rounded-9 shadow-5-strong shadow-5-primary d-flex justify-content-center align-content-center align-items-center'>
                                    <div className="d-flex flex-row align-items-center p-0 m-0 gap-3">
                                        <div className="d-flex flex-column col-3 justify-content-start align-content-start">
                                            <FontAwesomeIcon
                                                icon={faShareFromSquare}
                                                className="text-white me-2 fs-3 text-start"
                                            />
                                        </div>
                                        <div className="d-flex col-9 justify-content-center align-content-center">
                                            <h6 className="p-0 m-0 text-white text-center ">Entrada</h6>
                                        </div>
                                    </div>
                                </MDBBtn>
                            </Link>
                        </li>
                        <li className="m-3">
                            <Link to="/alterar">
                                <MDBBtn
                                    className='menu-btn-tamanho btn-warning border rounded-9 shadow-5-strong shadow-5-primary d-flex justify-content-center align-content-center align-items-center'>
                                    <div className="d-flex flex-row align-items-center p-0 m-0 gap-3">
                                        <div className="d-flex flex-column col-3 justify-content-start align-content-start">
                                            <FontAwesomeIcon
                                                icon={faBoxesStacked}
                                                className="text-white me-2 fs-3 text-start"
                                            />
                                        </div>
                                        <div className="d-flex col-9 justify-content-center align-content-center">
                                            <h6 className="p-0 m-0 text-white text-center ">Alterar</h6>
                                        </div>
                                    </div>
                                </MDBBtn>
                            </Link>
                        </li>
                        <li className="m-3">
                            <Link to="/desativar">
                                <MDBBtn
                                    className='menu-btn-tamanho btn-danger border rounded-9 shadow-5-strong shadow-5-primary d-flex justify-content-center align-content-center align-items-center'>
                                    <div className="d-flex flex-row align-items-center p-0 m-0 gap-3">
                                        <div className="d-flex flex-column col-3 justify-content-start align-content-start">
                                            <FontAwesomeIcon
                                                icon={faPlugCircleExclamation}
                                                className="text-white me-2 fs-3 text-start"
                                            />
                                        </div>
                                        <div className="d-flex col-8 justify-content-center align-content-center">
                                            <h6 className="p-0 m-0 text-white text-center ">Desativar</h6>
                                        </div>
                                    </div>
                                </MDBBtn>
                            </Link>
                        </li>
                        <li className="m-3">
                            <Link to="/listar">
                                <MDBBtn
                                    className='menu-btn-tamanho btn-info border rounded-9 shadow-5-strong shadow-5-primary d-flex justify-content-center align-content-center align-items-center'>
                                    <div className="d-flex flex-row align-items-center p-0 m-0 gap-3">
                                        <div className="d-flex flex-column col-3 justify-content-start align-content-start">
                                            <FontAwesomeIcon
                                                icon={faTableCells}
                                                className="text-white me-2 fs-3 text-start"
                                            />
                                        </div>
                                        <div className="d-flex col-9 justify-content-center align-content-center">
                                            <h6 className="p-0 m-0 text-white text-center ">Listar</h6>
                                        </div>
                                    </div>
                                </MDBBtn>
                            </Link>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Menu;
