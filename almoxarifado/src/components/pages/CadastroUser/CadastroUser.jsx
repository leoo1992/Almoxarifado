import React from 'react';
import './cadastroUser.css';
import FormCadatroUser from './FormCadatroUser';
import NavCadastroUser from './NavCadastroUser';

const CadastroUser = () => {

  return (
    <>
      <div className="d-flex flex-column align-items-center vh-100">
        <NavCadastroUser />
        <FormCadatroUser /> 
      </div>
    </>
  );
};

export default CadastroUser;
