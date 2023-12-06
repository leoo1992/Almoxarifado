/* eslint-disable react/prop-types */
import React, { useEffect, useContext } from 'react';
import './styles.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from './ProductCard';
import Loading from './Loading';
import CartContext from '../../context/CartContext';

const Products = () => {

	const {
		products,
		setProducts,
		loading,
		setLoading
	} = useContext(CartContext);

	useEffect(() => {
		fetchProducts().then((response) => {
			setProducts(response);
			setTimeout(() => {
				setLoading(false);
			}, 1500);
		});

	}, []);

	return (
		<>
			{loading ? (<Loading />) : (
				products.map((product) => (
					<ProductCard data={product} key={product.id} />))
			)}
		</>
	);
};

export default Products;
