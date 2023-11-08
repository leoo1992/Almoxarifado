import React, { useState } from "react";
import "./styles.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavIcons from './NavIcons'

const NavPrincipal = () => {
    // eslint-disable-next-line
    const [theme, setTheme] = useState("dark"),
    updateTheme = (newTheme) => {
      setTheme(newTheme);
    };

    return (
        <Navbar bg="primary" data-bs-theme="light" className='flex-row justify-content-between p-1 shadow min-vw-100 mw-100 w-100'>
            <Navbar.Brand className='fw-bold text-white fs-3 p-0 m-0 bg-transparent text-decoration-none text-store-nav'>
                IA.<span className='text-success'>Store</span>
            </Navbar.Brand>
            <Nav className="text-end p-0 m-0">
                <NavIcons updateTheme={updateTheme} />
            </Nav>
        </Navbar>
    );
};

export default NavPrincipal;
