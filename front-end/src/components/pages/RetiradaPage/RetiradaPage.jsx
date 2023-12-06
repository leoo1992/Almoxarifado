import React, { useState } from 'react';
import './retirar.css';
import Footer from '../../component/Footer';
import NavPrincipal from '../../component/NavPrincipal';
import Products from '../../component/Products';
import {
	MDBRow,
	MDBContainer,
} from 'mdb-react-ui-kit';
import Search from './Search';
import Provider from '../../../context/Provider';

const RetiradaPage = () => {
	const [theme, setTheme] = useState('dark');

	const updateTheme = (newTheme) => {
		setTheme(newTheme);
	};

	return (
		<>
			<Provider>
				<NavPrincipal updateTheme={updateTheme} disableCart={false} disableHome={false} className="w-100 vw-100 d-flex" />
				<MDBContainer fluid className={`m-0 p-0 pt-5 w-100 vh-100 ${theme === 'dark' ? 'bg-dark data-bs-theme-dark text-white' : 'bg-light data-bs-theme-light text-black'}`}>
					<h1 className="text-center pt-5">Retirada</h1>
					<Search />
					<MDBRow className="p-0 m-0 d-flex justify-content-around align-content-around align-items-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
						<Products />
					</MDBRow>
					<Footer />
				</MDBContainer >
			</Provider>
		</>
	);
};

export default RetiradaPage;
