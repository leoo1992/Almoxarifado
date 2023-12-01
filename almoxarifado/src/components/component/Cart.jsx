import { React, useState, useEffect, useContext } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons';
import { MDBBtn, MDBRow, MDBContainer, MDBBtnGroup, MDBBadge } from 'mdb-react-ui-kit';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Provider from '../../context/Provider';
import CartItem from './CartItem';
import CartContext from '../../context/CartContext';
import { toast } from 'react-toastify';

function Cart() {
	const [showCart, setShowCart] = useState(false);
	const [theme, setTheme] = useState('dark');
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const { cartItems, setCartItems, quantity } = useContext(CartContext);
	const [totalQuantity, setTotalQuantity] = useState(0);

	const handleCloseCart = () => setShowCart(false);

	const toggleShowCart = () => {
		setShowCart((s) => !s);
		getThemeFromLocalStorage();
	};

	const removeItem = (itemIndex) => {
		const updatedCart = cartItems.filter((_, index) => index !== itemIndex);
		setCartItems(updatedCart);
		const newCart = cartItems.map((cartItem, index) => <CartItem key={index} data={{ ...cartItem, index }} removeItem={removeItem} />);

		return newCart;
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

	const clearCart = () => {

		if (totalQuantity !== 0 || cartItems.length !== 0) {
			setCartItems([]);
			setTotalQuantity(0);
			toast.success('Carrinho esvaziado', {
				icon: customIcon,
				className: 'bg-success text-light fs-4',
				style: {
					background: 'transparent',
				}
			});
		} else {
			toast.error('Carrinho vazio', {
				icon: '❌',
				className: 'bg-danger text-light fs-6',
				style: {
					background: 'transparent',
				},
			});
		}
	};

	const customIcon = <FontAwesomeIcon icon={faCheck} style={{ color: 'white' }} />;
	const endCart = () => {

		if (totalQuantity !== 0 || cartItems.length !== 0) {
			setCartItems([]);
			setTotalQuantity(0);
			setShowCart((s) => !s);
			toast.success('Compra Realizada', {
				icon: customIcon,
				className: 'bg-success text-light fs-4',
				style: {
					background: 'transparent',
				},
				position: toast.POSITION.TOP_CENTER,
			});
		} else {
			toast.error('Carrinho vazio', {
				icon: '❌',
				className: 'bg-danger text-light fs-6',
				style: {
					background: 'transparent',
				},
			});
		}

	};

	useEffect(() => {
		getThemeFromLocalStorage();
		window.addEventListener('resize', handleResize);

		setTotalQuantity(Object.values(quantity).reduce((acc, value) => acc + parseInt(value, 10), 0));

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [quantity]);

	const cartTooltip = (
		<Tooltip id="cartTooltip">
			Carrinho
		</Tooltip>
	);

	return (
		<>
			<Provider>
				<OverlayTrigger placement="bottom" overlay={cartTooltip}>
					<MDBBtn
						rounded
						className="m-0 p-0 d-flex justify-content-center align-content-center align-items-center fw-bold shadow border bg-primary "
						onClick={toggleShowCart}
						size={windowWidth < 370 ? 'sm' : 'lg'}
						color="none"
					>
						{cartItems.length > 0 &&
							< span className="ms-1 m-0 badge rounded-9 text-white fw-bold rounded-circle bg-success">
								{cartItems.length}
							</span>
						}
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
					className={`m-0 rounded-3 hover-menu menu-tamanho w-auto shadow-6-strong ${theme === 'dark' ? 'bg-dark data-bs-theme-dark text-white border border-white' : 'bg-light data-bs-theme-light text-black border border-dark'}`}
				>
					<Offcanvas.Header
						closeButton
						className='p-2 bg-primary text-white fw-bold rounded-top-3 border m-0'
						closeVariant='white'
					>
						<Offcanvas.Title className="fs-6 fw-bold m-0 p-0" >
							Carrinho
						</Offcanvas.Title>
					</Offcanvas.Header>

					<Offcanvas.Body className='d-flex justify-content-center'>
						<MDBContainer fluid className='m-0 p-0'>
							<MDBRow className="p-0 m-0 d-flex justify-content-around align-content-around align-items-center row-cols-1 product-tamanho">

								{cartItems.map((cartItem, index) => <CartItem key={index} data={{ ...cartItem, index }} removeItem={removeItem} />)}

							</MDBRow>
						</MDBContainer>
					</Offcanvas.Body>
					<div className="bg-primary p-1 m-0 d-flex justify-content-center align-content-center align-items-center rounded-bottom-3 border">
						<MDBBadge className='bg-body text-black text-center m-1 d-flex col'>
							Itens: {cartItems.length} | Qtd: {totalQuantity}
						</MDBBadge>
						<MDBBtnGroup size='sm' className='shadow-5-strong border'>
							<MDBBtn
								onClick={clearCart}
								className='m-0 border shadow-5-strong'
								color='danger'
							> Limpar</MDBBtn>
							<MDBBtn
								onClick={endCart}
								className='m-0 border shadow-5-strong'
								color='success'
							>Finalizar</MDBBtn>
						</MDBBtnGroup>
					</div>
				</Offcanvas >
			</Provider >
		</>
	);
}

export default Cart;
