import { React, useState } from "react";
import "./styles.css";
import { MDBBtn } from 'mdb-react-ui-kit';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";



const Menu = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <>
            <MDBBtn
                variant="primary"
                onClick={toggleShow}
                className='m-1 p-0 shadow d-flex justify-content-center align-content-center align-items-center fw-bold rounded-5 border'
                shadow
            >
                <FontAwesomeIcon icon={faBars} className='text-white shadow m-0 p-1 fw-bold fs-5' />
            </MDBBtn>
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
                <Offcanvas.Header closeButton closeVariant='white fw-bolder text-light rounded-9 btn-outline-danger fs-6 btn-sm shadow'>
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
