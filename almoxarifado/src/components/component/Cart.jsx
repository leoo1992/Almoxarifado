import { React, useState, useEffect } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { MDBBtn } from 'mdb-react-ui-kit';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Cart() {
	const totalCounters = useState(999);
	const [showCart, setShowCart] = useState(false);
	const [theme, setTheme] = useState('dark');
	const handleCloseCart = () => setShowCart(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	
	const toggleShowCart = () => {
		setShowCart((s) => !s);
		const getThemeFromLocalStorage = () => {
			const storedTheme = localStorage.getItem('theme');
			if (storedTheme) {
				setTheme(storedTheme);
			}
		};

		getThemeFromLocalStorage();
	};

	const cartTooltip = (
		<Tooltip id="cartTooltip">
			Menu
		</Tooltip>
	);

	useEffect(() => {
		const getThemeFromLocalStorage = () => {
			const storedTheme = localStorage.getItem('theme');

			const handleResize = () => {
				setWindowWidth(window.innerWidth);
			};
			window.addEventListener('resize', handleResize);

			if (storedTheme) {
				setTheme(storedTheme);
			}

			return () => {
				window.removeEventListener('resize', handleResize);
			};
		};

		getThemeFromLocalStorage();
	}, []);

	return (
		<>
			<OverlayTrigger placement="bottom" overlay={cartTooltip}>
				<MDBBtn
					rounded
					className="m-0 p-0 d-flex justify-content-center align-content-center align-items-center fw-bold shadow border bg-primary "
					onClick={toggleShowCart}
					size= {windowWidth < 370 ? 'sm' : 'lg'}
					color="none"
				>
					<span className="ms-1 m-0 badge rounded-9 text-white fw-bold rounded-circle bg-success">{totalCounters}</span>
					<FontAwesomeIcon icon={faShoppingBasket}
						className={`text-white m-0 p-2 ${windowWidth < 370 ? 'fs-6 ' : 'fs-3'}`} 
					/>
				</MDBBtn>
			</OverlayTrigger >
			<Offcanvas
				show={showCart}
				onHide={handleCloseCart}
				placement="end"
				scroll
				backdrop
				keyboard
				autoFocus
				enforceFocus
				restoreFocus
				className={`m-1 hover-menu menu-tamanho w-auto shadow-6-strong ${theme === 'dark' ? 'bg-dark data-bs-theme-dark text-white border border-white' : 'bg-light data-bs-theme-light text-black border border-dark'}`}
			>
				<Offcanvas.Header
					closeButton
					closeVariant={`${theme === 'dark' ? 'white' : ''}`}
				>
					<Offcanvas.Title className="fs-4 fw-bold" >
            Carrinho
					</Offcanvas.Title>
				</Offcanvas.Header>

				<Offcanvas.Body>

				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}

export default Cart;
