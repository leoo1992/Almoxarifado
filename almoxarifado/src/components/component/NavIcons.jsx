import React, { useState, useEffect } from 'react';
import "./styles.css";
import Menu from './Menu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBBtn } from 'mdb-react-ui-kit';
import { faSun, faMoon, faSignOutAlt, faShoppingBasket, faHome } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Cookies from 'js-cookie';

const NavIcons = (props) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    const totalCounters = '';

    useEffect(() => {
        props.updateTheme(theme);
        document.body.className = `bg-${theme} data-bs-theme-${theme}`;
    }, [theme, props]);

    const handlelogout = () => {
        const cookies = Cookies.get();
        for (const cookie in cookies) {
            if (cookie.startsWith("token")) {
                Cookies.remove(cookie);
            }
        }

        Object.keys(localStorage).forEach((key) => {
            if (key.startsWith("token")) {
                localStorage.removeItem(key);
            }
        });

        Object.keys(sessionStorage).forEach((key) => {
            if (key.startsWith("token")) {
                sessionStorage.removeItem(key);
            }
        });

        window.location.href = '/';
    };

    const handleToggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        props.updateTheme(newTheme);
    };

    const logoutTooltip = (
        <Tooltip id="go-back-tooltip">Logout</Tooltip>
    );

    const homeTooltip = (
        <Tooltip id="go-back-tooltip">Home</Tooltip>
    );

    const toggleThemeTooltip = (
        <Tooltip id="toggle-theme-tooltip">
            {theme === "dark" ? "Modo Claro" : "Modo Escuro"}
        </Tooltip>
    );

    const shoppingTooltip = (
        <Tooltip id="shopping-tooltip">
            Carrinho
        </Tooltip>
    );

    const handleButtonHomeClick = () => {
        window.location.href = '/';
    };


    return (
        <div className="d-flex flex-wrap m-0 p-0 align-items-center gap-1 justify-content-center  align-content-center">

            {!props.disableCart ? (
                <OverlayTrigger placement="bottom" overlay={shoppingTooltip}>
                    <MDBBtn
                        rounded
                        className='m-0 p-1 d-flex justify-content-center align-content-center align-items-center fw-bold shadow border bg-primary '
                        size='lg'
                        color='none'
                    >
                        <span className="badge rounded-9 text-white fw-bold m-0 rounded-circle bg-success ">{totalCounters}</span>
                        <FontAwesomeIcon icon={faShoppingBasket}
                            className='text-white m-0 p-1 rounded-circle fs-3 '
                        />
                    </MDBBtn>
                </OverlayTrigger>
            ) : (
                <div className='d-none p-0 m-0'></div>
            )}

            <OverlayTrigger placement="bottom" overlay={toggleThemeTooltip}>
                <MDBBtn
                    onClick={handleToggleTheme}
                    floating
                    className='m-0 p-0 shadow d-flex justify-content-center align-content-center align-items-center fw-bold border'
                    size='lg'
                    color='none'
                    id='trocaTema'
                >
                    {theme === "dark" ? (
                        <FontAwesomeIcon icon={faSun} className='text-black bg-warning m-0 p-3 rounded-circle fs-3 w-75 h-75' />
                    ) : (
                        <FontAwesomeIcon icon={faMoon} className='text-black bg-info m-0 p-3 rounded-circle fs-3 w-75 h-75' />
                    )}
                </MDBBtn>
            </OverlayTrigger>

            {!props.disableHome ? (
                <OverlayTrigger placement="bottom" overlay={homeTooltip}>
                    <MDBBtn
                        onClick={handleButtonHomeClick}
                        className='m-0 p-0 shadow d-flex justify-content-center align-content-center align-items-center fw-bold rounded-circle border'
                        size='lg'
                        color='primary'
                    >
                        <FontAwesomeIcon icon={faHome}
                            className='text-white m-0 p-2 fs-3 '
                        />
                    </MDBBtn>
                </OverlayTrigger>
            ) : (
                <div className='d-none p-0 m-0'></div>
            )}

            <OverlayTrigger placement="bottom" overlay={logoutTooltip}>
                <MDBBtn
                    onClick={handlelogout}
                    className='m-0 p-0 shadow d-flex justify-content-center align-content-center align-items-center fw-bold rounded-circle border'
                    size='lg'
                    color='primary'
                >
                    <FontAwesomeIcon icon={faSignOutAlt}
                        className='text-white m-0 p-2 fs-3  '
                    />
                </MDBBtn>
            </OverlayTrigger>
            < Menu />
        </div>
    );
};

export default NavIcons;