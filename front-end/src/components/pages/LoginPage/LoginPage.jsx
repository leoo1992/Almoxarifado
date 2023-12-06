import React from 'react';
import './login.css';
import FormLogin from './FormLogin';
import NavLogin from './NavLogin';
import Footer from '../../component/Footer';

const LoginPage = () => {

	return (
		<>
			<div className="d-flex flex-column align-items-center vh-100 w-100">
				<NavLogin />
				<FormLogin />
			</div>
			<Footer/>
		</>
	);
};

export default LoginPage;
