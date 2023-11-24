/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './styles.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from './ProductCard';

const Products = () => {
	//eslint-disable-next-line
	const [products, setProducts] = useState([]);
	//eslint-disable-next-line

	useEffect(() => {
		fetchProducts().then((response) => {
			setProducts(response);
		});

	}, []);

	return (
		<>
			{
				products.map((product) => <ProductCard data={product} key={product.id} />)
			}
		</>
	);
};

export default Products;
