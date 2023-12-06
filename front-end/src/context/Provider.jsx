import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import CartContext from './CartContext';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Provider({ children }) {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [cartItems, setCartItems] = useState([]);
	const [quantity, setQuantity] = useState([]);
	const [totalQuantity, setTotalQuantity] = useState();

	const customIcon = <FontAwesomeIcon icon={faCheck} style={{ color: 'white' }} />;

	useEffect(() => {
		setTotalQuantity(Object.values(quantity).reduce((acc, value) => acc + parseInt(value, 10), 0));
	}, [quantity]);


	const clearCart = () => {

		if (totalQuantity !== 0 || cartItems.length !== 0) {
			setCartItems([]);
			setTotalQuantity(0);
			setQuantity(0);
			toast.success('Carrinho esvaziado', {
				icon: customIcon,
				className: 'bg-success text-light fs-4',
				style: {
					background: 'transparent',
				}
			});
		} else {
			setCartItems([]);
			setTotalQuantity(0);
			setQuantity(0);
			toast.error('Carrinho vazio', {
				icon: '❌',
				className: 'bg-danger text-light fs-6',
				style: {
					background: 'transparent',
				},
			});
		}
	};

	const value = {
		products,
		setProducts,
		loading,
		setLoading,
		cartItems,
		setCartItems,
		quantity,
		setQuantity,
		totalQuantity,
		setTotalQuantity,
		clearCart
	};


	return (
		<CartContext.Provider value={value}>
			{children}
		</CartContext.Provider>

	);
}

export default Provider;
Provider.propTypes = {
	children: propTypes.any,
};

Provider.propTypes = {
	children: propTypes.any.isRequired,
};