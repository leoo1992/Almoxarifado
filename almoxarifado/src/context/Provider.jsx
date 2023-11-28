import React, {useState} from 'react';
import propTypes from 'prop-types';
import CartContext from './CartContext';

function Provider({ children }) {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	const value={
		products,
		setProducts,
		loading,
		setLoading
	};

	return (
		<CartContext.Provider value={ value }>
			{children}
		</CartContext.Provider>

	);
}

export default Provider;

Provider.propTypes = {
	children: propTypes.any,
}.isRequired;