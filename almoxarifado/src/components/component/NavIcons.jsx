import React, { useState, useEffect } from 'react';
import "./styles.css";
import Menu from './Menu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBBtn } from 'mdb-react-ui-kit';
import { faSun, faMoon, faSignOutAlt, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Cookies from 'js-cookie';

const NavIcons = (props) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    const totalCounters = '';
    useEffect(() => {
        props.updateTheme(theme);
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
        const newTheme = theme === "dark" ? "default" : "dark";
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        props.updateTheme(newTheme);
    };

    const logoutTooltip = (
        <Tooltip id="go-back-tooltip">Logout</Tooltip>
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

    return (
        <div className="d-flex m-0 p-0 align-items-center gap-1 justify-content-center  align-content-center">

            <OverlayTrigger placement="bottom" overlay={shoppingTooltip}>
                <MDBBtn
                    rounded
                    className='m-0 p-1 d-flex justify-content-center align-content-center align-items-center fw-bold shadow border bg-primary'
                    size='lg'
                    color='none'
                >
                    <span className="badge rounded-9 text-white fw-bold m-0 rounded-circle bg-success ">{totalCounters}</span>
                    <FontAwesomeIcon icon={faShoppingBasket}
                        className='text-white m-0 p-1 rounded-circle'
                    />
                </MDBBtn>
            </OverlayTrigger>

            <OverlayTrigger placement="bottom" overlay={toggleThemeTooltip}>
                <MDBBtn
                    onClick={handleToggleTheme}
                    floating
                    className='m-0 p-0 shadow d-flex justify-content-center align-content-center align-items-center fw-bold border'
                    size='sm'
                    color='none'
                    id='trocaTema'
                >
                    {theme === "dark" ? (
                        <FontAwesomeIcon icon={faSun} className='text-black bg-warning m-0 p-2 rounded-circle' />
                    ) : (
                        <FontAwesomeIcon icon={faMoon} className='text-black bg-info m-0 p-2 rounded-circle' />
                    )}
                </MDBBtn>
            </OverlayTrigger>

            <OverlayTrigger placement="bottom" overlay={logoutTooltip}>
                <MDBBtn
                    onClick={handlelogout}
                    className='m-0 p-0 shadow d-flex justify-content-center align-content-center align-items-center fw-bold rounded-circle border'
                    size='lg'
                    color='primary'
                >
                    <FontAwesomeIcon icon={faSignOutAlt}
                        className='text-white m-0 p-2 '
                    />
                </MDBBtn>
            </OverlayTrigger>
            < Menu />
        </div>
    );
};

export default NavIcons;