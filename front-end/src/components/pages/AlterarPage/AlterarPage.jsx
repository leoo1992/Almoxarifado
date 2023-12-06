import React, { useState } from 'react';
import NavPrincipal from '../../component/NavPrincipal';
import {
	MDBContainer,
} from 'mdb-react-ui-kit';
import Footer from '../../component/Footer';

function AlterarPage() {
	// eslint-disable-next-line
	const [theme, setTheme] = useState("dark");

	const updateTheme = (newTheme) => {
		setTheme(newTheme);
	};
	return (
		<>
			<NavPrincipal updateTheme={updateTheme} disableCart={true} disableHome={false} className="w-100 vw-100 d-flex" />
			<MDBContainer fluid className={`m-0 p-0 mt pt-5 w-100 vh-100 ${theme === 'dark' ? 'bg-dark data-bs-theme-dark text-white' : 'bg-light data-bs-theme-light text-black'}`}>
				<h1 className="text-center pt-5">Alterar</h1>
			</MDBContainer>
			<Footer />
		</>
	);
}


export default AlterarPage;
