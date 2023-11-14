import { React, useState } from "react";
import "./styles.css";
import { MDBBtn } from 'mdb-react-ui-kit';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

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
                    className='m-1 p-0 shadow d-flex justify-content-center align-content-center align-items-center fw-bold rounded-5 border'
                >
                    <FontAwesomeIcon icon={faBars} className='text-white shadow m-0 p-1 fw-bold fs-5' />
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
                    <MDBBtn className="btn-menu-tamanho">
                        item
                    </MDBBtn>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Menu;
