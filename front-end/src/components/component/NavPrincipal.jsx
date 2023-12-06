/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavIcons from './NavIcons';

const NavPrincipal = (props) => {
	// eslint-disable-next-line
	const [theme, setTheme] = useState('dark');
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const updateTheme = (newTheme) => {
		setTheme(newTheme);
		props.updateTheme(newTheme);
	};

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<Navbar bg="primary" data-bs-theme="light" className="flex-row justify-content-between p-1 shadow position-fixed w-100 z-1">
			<Navbar.Brand as={Link} to="/" className={`p-1 fw-bold text-white p-0 m-0 bg-transparent text-decoration-none text-store-nav
      ${windowWidth < 386 ? 'fs-5 ms-2 p-0 m-0' : 'fs-3 ms-3'} ${windowWidth < 360 ? 'p-0 m-0 ms-1 fs-6' : ''}`}>
        IA.<span className="text-success">Store</span>
			</Navbar.Brand>

			<Nav className={`text-end p-0 m-0 ${windowWidth < 340 ? 'fs-6' : ''}`}>
				<NavIcons updateTheme={updateTheme} disableCart={props.disableCart} disableHome={props.disableHome} />
			</Nav>
		</Navbar>
	);
};

export default NavPrincipal;
