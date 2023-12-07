/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './styles.css';
import Menu from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MDBBtn } from 'mdb-react-ui-kit';
import { faSun, faMoon, faSignOutAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const NavIcons = (props) => {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		props.updateTheme(theme);
		document.body.className = `bg-${theme} data-bs-theme-${theme}`;

		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [theme, props]);

	const handlelogout = () => {
		const cookies = Cookies.get();
		for (const cookie in cookies) {
			if (cookie.startsWith('token')) {
				Cookies.remove(cookie);
			}
		}

		Object.keys(localStorage).forEach((key) => {
			if (key.startsWith('token')) {
				localStorage.removeItem(key);
			}
		});

		Object.keys(sessionStorage).forEach((key) => {
			if (key.startsWith('token')) {
				sessionStorage.removeItem(key);
			}
		});

		window.location.href = '/';
	};

	const handleToggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
		window.postMessage({ theme: newTheme }, window.location.origin);
		props.updateTheme(newTheme);
	};

	const logoutTooltip = <Tooltip id="go-back-tooltip">Logout</Tooltip>;

	const homeTooltip = <Tooltip id="go-back-tooltip">Home</Tooltip>;

	const toggleThemeTooltip = (
		<Tooltip id="toggle-theme-tooltip">
			{theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
		</Tooltip>
	);

	return (
		<>
			<div className="d-flex flex-wrap m-0 p-0 align-items-center gap-1 justify-content-center  align-content-center gap-1">
				{!props.disableCart ? (
					<Cart />
				) : (
					<div className="d-none p-0 m-0"></div>
				)}

				<OverlayTrigger placement="bottom" overlay={toggleThemeTooltip}>
					<MDBBtn
						onClick={handleToggleTheme}
						floating
						className="m-0 p-0 shadow d-flex justify-content-center align-content-center align-items-center border"
						color="none"
						size={windowWidth < 370 ? 'sm' : 'lg'}
						id="trocaTema"
					>
						{theme === 'dark' ? (
							<FontAwesomeIcon icon={faSun} className={`d-flex justify-content-center align-content-center align-items-center text-black bg-warning m-0 rounded-circle 
						${windowWidth < 370 ? 'fs-6 p-2 w-50 h-50' : 'fs-3 p-3 w-75 h-75'} ${windowWidth < 340 ? 'fs-6 p-1 w-25 h-25' : ''}`} />
						) : (
							<FontAwesomeIcon icon={faMoon} className={`d-flex justify-content-center align-content-center align-items-center text-black bg-info m-0 rounded-circle 
						${windowWidth < 370 ? 'fs-6 p-2 w-50 h-50' : 'fs-3 p-3 w-75 h-75'} ${windowWidth < 340 ? 'fs-6 p-1 w-25 h-25' : ''}`} />
						)}
					</MDBBtn>
				</OverlayTrigger>

				{!props.disableHome ? (
					<OverlayTrigger placement="bottom" overlay={homeTooltip}>
						<Link to="/">
							<MDBBtn
								className="m-0 p-0 shadow d-flex justify-content-center align-content-center align-items-center fw-bold rounded-circle border"
								size={windowWidth < 370 ? 'sm' : 'lg'}
								color="primary"
							>
								<FontAwesomeIcon icon={faHome}
									className={`text-white m-0 p-2 ${windowWidth < 370 ? 'fs-6' : 'fs-3'} ${windowWidth < 340 ? 'fs-6 p-1' : ''} `}
								/>
							</MDBBtn>
						</Link>
					</OverlayTrigger>
				) : (
					<div className="d-none p-0 m-0"></div>
				)}

				<OverlayTrigger placement="bottom" overlay={logoutTooltip}>
					<MDBBtn
						onClick={handlelogout}
						className="m-0 p-0 shadow d-flex justify-content-center align-content-center align-items-center fw-bold rounded-circle border"
						size={windowWidth < 370 ? 'sm' : 'lg'}
						color="primary"
					>
						<FontAwesomeIcon icon={faSignOutAlt}
							className={`text-white m-0 p-2 ${windowWidth < 370 ? 'fs-6' : 'fs-3'}  ${windowWidth < 340 ? 'fs-6 p-1' : ''}`}
						/>
					</MDBBtn>
				</OverlayTrigger>
			</div>
			< Menu className="m-2" />
		</>
	);
};

export default NavIcons;
