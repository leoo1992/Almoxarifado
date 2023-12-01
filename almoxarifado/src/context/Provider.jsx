import React, { useState } from 'react';
import propTypes from 'prop-types';
import CartContext from './CartContext';

function Provider({ children }) {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [cartItems, setCartItems] = useState([]);
	const [quantity, setQuantity] = useState([]);

	const value = {
		products,
		setProducts,
		loading,
		setLoading,
		cartItems,
		setCartItems,
		quantity,
		setQuantity,
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