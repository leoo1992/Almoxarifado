import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCubes } from '@fortawesome/free-solid-svg-icons';
import { MDBBtn } from 'mdb-react-ui-kit';
import UseAnimations from 'react-useanimations';
import MenuIcon from 'react-useanimations/lib/menu4';

const Menu = () => {
	const [show, setShow] = useState(false);
	const [theme, setTheme] = useState('dark');
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const handleClose = () => setShow(false);
	const toggleShow = () => {
		getThemeFromLocalStorage();
		setTimeout(() => {
			setShow((s) => !s);
		}, 800);
	};

	const getThemeFromLocalStorage = () => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme) {
			setTheme(storedTheme);
		}
	};

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const menuTooltip = (
		<Tooltip id="menu-tooltip">
			Menu
		</Tooltip>
	);

	return (
		<div className="position-relative ">
			<OverlayTrigger placement="bottom" overlay={menuTooltip}>
				<MDBBtn
					variant="primary"
					onClick={toggleShow}
					size={windowWidth < 370 ? 'sm' : 'lg'}
					className="m-0 p-0 shadow d-flex justify-content-center align-content-center align-items-center fw-bold rounded-5 border"
				>
					<FontAwesomeIcon icon={faBars} className={`text-white m-0 p-2 ${windowWidth < 370 ? 'fs-6 ' : 'fs-3'}`} />
				</MDBBtn >
			</OverlayTrigger>
			<Offcanvas
				show={show}
				onHide={handleClose}
				placement="end"
				scroll
				backdrop
				keyboard
				autoFocus
				enforceFocus
				restoreFocus
				className={`m-1 hover-menu menu-tamanho w-auto shadow-6-strong d-flex ${theme === 'dark' ? 'bg-dark data-bs-theme-dark text-white border border-white' : 'bg-light data-bs-theme-light text-black border border-dark'}`}
			>
				<Offcanvas.Header
					closeVariant={`${theme === 'dark' ? 'white' : ''}`}
				>
					<Offcanvas.Title className="fs-4 fw-bold" >
						Menu
					</Offcanvas.Title>

					<MDBBtn
						onClick={!show ? toggleShow : handleClose}
						className={`p-0 m-0 btn-danger shadow-5-strong border border-2 ${theme === 'dark'  ? 'border-white' : 'border-dark'}`}
					>
						<UseAnimations animation={MenuIcon} reverse speed={0.5} size={windowWidth < 370 ? 30 : 30} strokeColor={'white'}
							className={'m-0 p-0 d-flex fw-bold justify-content-center align-content-center align-items-center cursor-pointer'} />
					</MDBBtn>

				</Offcanvas.Header>

				<Offcanvas.Body className='d-flex justify-content-center'>
					<ul className="list-unstyled p-1">
						<li className="m-3">
							<Link to="/retirar">
								<MDBBtn
									className={`${theme === 'dark' ? 'border border-2 border-white' : 'border border-2 border-dark'} menu-btn-tamanho btn-success rounded-9 shadow-5-strong shadow-5-primary d-flex justify-content-center align-content-center align-items-center`}>
									<div className="d-flex flex-row align-items-center p-0 m-0 gap-3">
										<div className="d-flex flex-column col-3 justify-content-start align-content-start">
											<FontAwesomeIcon
												icon={faCubes}
												className=" me-2 fs-3 text-start"
											/>
										</div>
										<div className="d-flex col-9 justify-content-center align-content-center">
											<h6 className="p-0 m-0  text-center ">Retirada</h6>
										</div>
									</div>
								</MDBBtn>
							</Link>
						</li>
					</ul>
				</Offcanvas.Body>
			</Offcanvas>
		</div>
	);
};

export default Menu;
