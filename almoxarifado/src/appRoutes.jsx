import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import Login from "./components/pages/LoginPage/LoginPage";
import CadastroUser from "./components/pages/CadastroUser/CadastroUser";
import RetiradaPage from "./components/pages/RetiradaPage/RetiradaPage";
import EntradaPage from "./components/pages/EntradaPage/EntradaPage";
import AlterarPage from "./components/pages/AlterarPage/AlterarPage";
import DesativarPage from "./components/pages/DesativarPage/DesativarPage";
import ListarPage from "./components/pages/ListarPage/ListarPage";

const AppRoutes = () => {

  const authentic = () => {
    let token = localStorage.getItem("token");
    if (token) {
      return true
    } else {
      return false
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={authentic() ? <HomePage /> : <Login />} />
        <Route path="/cadastro-usuarios" element={authentic() ? <CadastroUser /> : <CadastroUser />} />
        <Route path="/home" element={authentic() ? <HomePage /> : <Navigate to="/" />} />
        <Route path="/retirar" element={authentic() ? <RetiradaPage /> : <Navigate to="/" />} />
        <Route path="/entrada" element={authentic() ? <EntradaPage /> : <Navigate to="/" />} />
        <Route path="/alterar" element={authentic() ? <AlterarPage /> : <Navigate to="/" />} />
        <Route path="/desativar" element={authentic() ? <DesativarPage /> : <Navigate to="/" />} />
        <Route path="/listar" element={authentic() ? <ListarPage /> : <Navigate to="/" />} />
        {/* 
        <Route path="/atualiza/:id" element={authenticated ? <Atualiza /> : <Navigate to="/" />} /> //atualiza produto
        */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;