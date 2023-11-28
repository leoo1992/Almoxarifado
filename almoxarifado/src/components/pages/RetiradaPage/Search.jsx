import React, { useState, useRef, useEffect, useContext } from 'react';
import './retirar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import fetchProducts from '../../../api/fetchProducts';
import CartContext from '../../../context/CartContext';

function Search() {
	const [isFocused, setIsFocused] = useState(false);
	const inputRef = useRef(null);
	const [search, setSearch] = useState('');
	const [theme, setTheme] = useState(localStorage.getItem('theme'));

	const handleStorageChange = () => {

		const updatedTheme = localStorage.getItem('theme');
		if (updatedTheme) {
			setTheme(updatedTheme);
		}
	};

	const handleMessage = (event) => {
		if (event.data.theme) {
			setTheme(event.data.theme);
		}
	};

	const { setProducts } = useContext(CartContext);
	const handleSearch = async (event) => {
		event.preventDefault();

		const products = await fetchProducts(search);
		setProducts(products);
		setSearch('');
	};

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme) {
			setTheme(storedTheme);
		}

		window.addEventListener('message', handleMessage);
		window.addEventListener('storage', handleStorageChange);

		return () => {
			window.removeEventListener('storage', handleStorageChange);
			window.removeEventListener('message', handleMessage);
		};
	}, []);

	const handleColClick = () => {
		setIsFocused(true);
		inputRef.current.focus();
	};

	const handleInputFocus = () => {
		setIsFocused(true);
	};

	const handleInputBlur = () => {
		setIsFocused(false);
	};

	return (
		<form onSubmit={handleSearch}>
			<MDBRow className='d-flex justify-content-end align-content-end align-items-end m-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 '>
				<MDBCol
					onClick={handleColClick}
					style={{ cursor: 'pointer' }}
					className={`d-flex justify-content-center align-content-center align-items-center p-4 rounded-9 m-0 gap-1 
						rounded shadow-5-strong ${isFocused ? 'opacity-100' : 'opacity-50'} ${theme === 'light' ? 'bg-success' : 'bg-primary'}`}
				>
					<FontAwesomeIcon icon={faSearch} className='m-0 p-0 text-white' />
					<MDBInput
						type="search"
						size='sm'
						id='searchfield'
						label='Procurar'
						placeholder='Procurar'
						className='rounded-9'
						contrast
						onFocus={handleInputFocus}
						onBlur={handleInputBlur}
						ref={inputRef}
						value={search}
						onChange={({ target }) => setSearch(target.value)}
						required
					/>
				</MDBCol>
			</MDBRow>
		</form>
	);
}

export default Search;
