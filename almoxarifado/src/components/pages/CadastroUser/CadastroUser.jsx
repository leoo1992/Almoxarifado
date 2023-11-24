import React from 'react';
import './cadastroUser.css';
import FormCadatroUser from './FormCadatroUser';
import NavCadastroUser from './NavCadastroUser';
import Footer from '../../component/Footer';

const CadastroUser = () => {

	return (
		<>
			<div className="d-flex flex-column align-items-center vh-100">
				<NavCadastroUser />
				<FormCadatroUser /> 
			</div>
			<Footer />
		</>
	);
};

export default CadastroUser;
