import React from 'react';
import './login.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MDBBtn } from 'mdb-react-ui-kit';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const NavLogin = () => {
	return (
		<Navbar bg="primary" data-bs-theme="light" className="flex-row justify-content-between p-2 shadow min-vw-100 mw-100 w-100">
			<Navbar.Brand className="fw-bold text-white fs-3 p-0 m-0 bg-transparent text-decoration-none text-store-nav">
                IA.<span className="text-success">Store</span>
			</Navbar.Brand>
			<Nav className="text-end p-0 m-0">
				<OverlayTrigger placement="bottom" overlay={<Tooltip id="ocultar-button-tooltip">Cadastrar</Tooltip>}>
					<MDBBtn
						href="/cadastro-usuarios"
						className="fw-bold text-white border shadow"
						rounded
						color="primary"
					>
                        Cadastrar
					</MDBBtn>
				</OverlayTrigger>
			</Nav>
		</Navbar>
	);
};

export default NavLogin;
