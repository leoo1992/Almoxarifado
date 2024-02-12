import React, { useState } from 'react';
import './home.css';
import NavPrincipal from '../../component/NavPrincipal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Footer from '../../component/Footer';
import { Link } from 'react-router-dom';
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

	return (
		<>
			<NavPrincipal updateTheme={updateTheme} disableCart={true} disableHome={true} className="w-100 vw-100 d-flex" />
			<MDBContainer fluid className={`m-0 p-0 pt-5 vh-100 min-vh-100 ${theme === 'dark' ? 'bg-dark data-bs-theme-dark' : 'bg-light data-bs-theme-light'}`}>

				<MDBRow className="p-2 m-2 d-flex justify-content-start align-content-center align-items-center row-cols-2 row-cols-sm-4 row-cols-md-6 row-cols-lg-8 row-cols-xl-10 g-5">
					<MDBCol className="d-flex justify-content-center align-content-center align-items-center">
						<OverlayTrigger placement="bottom" overlay={retirarTooltip} delay={{ show: 250, hide: 400 }}>
							<Link to="/retirar">
								<MDBBtn
									style={{ boxShadow: '1px 1px 5px 0px' }}
									className="p-3 m-0 bg-transparent btn-outline-success rounded-9  d-flex justify-content-center align-content-center align-items-center">
									<div className="d-flex justify-content-center align-content-center align-items-center rounded-9 p-0 m-0 ">
										<FontAwesomeIcon
											icon={faCubes}
											className="p-0 m-0 text-center text-success w-100 h-100 d-flex justify-content-center align-content-center align-items-center'"
										/>
									</div>
								</MDBBtn>
							</Link>
						</OverlayTrigger>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<Footer />
		</>
	);
};

export default HomePage;
