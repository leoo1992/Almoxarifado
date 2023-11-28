import React, {useState} from 'react';
import propTypes from 'prop-types';
import CartContext from './CartContext';

function Provider({ children }) {
	const [products, setProducts] = useState([]);

	const value={
		products,
		setProducts
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