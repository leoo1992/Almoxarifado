import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Login from "./components/pages/LoginPage";
import CadastroUser from "./components/pages/CadastroUser";
import RetiradaPage from "./components/pages/RetiradaPage";

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

        {/* 
        <Route path="/cadastro" element={authenticated ? <Cadastro /> : <Navigate to="/" />} /> //cadastro produto
        <Route path="/listas" element={authenticated ? <Listas /> : <Navigate to="/" />} /> //lista produto
        <Route path="/atualiza/:id" element={authenticated ? <Atualiza /> : <Navigate to="/" />} /> //atualiza produto
        */}

      </Routes>
    </Router>
  );
};

export default AppRoutes;