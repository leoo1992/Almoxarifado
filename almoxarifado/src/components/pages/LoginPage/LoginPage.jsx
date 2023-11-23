import React from 'react';
import './login.css';
import FormLogin from './FormLogin';
import NavLogin from './NavLogin';

const LoginPage = () => {

  return (
    <>
      <div className="d-flex flex-column align-items-center vh-100">
        <NavLogin />
        <FormLogin />
      </div>
    </>
  );
};

export default LoginPage;
