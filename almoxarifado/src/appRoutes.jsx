import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Login from "./components/pages/LoginPage";

const AppRoutes = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={authenticated ? <HomePage /> : <Login />} />
        <Route path="/home" element={authenticated ? <HomePage /> : <Login />} />

        {/* <Route path="/cadastro" element={authenticated ? <Cadastro /> : <Navigate to="/" />} />
        <Route path="/cadastrousers" element={authenticated ? <CadastrarUser /> : <CadastrarUser />} />

        <Route path="/listas" element={authenticated ? <Listas /> : <Navigate to="/" />} />
        <Route path="/cadastrados" element={authenticated ? <Cadastrados /> : <Navigate to="/" />} />
        <Route path="/logs" element={authenticated ? <Logs /> : <Navigate to="/" />} />
        <Route path="/atualiza/:id" element={authenticated ? <Atualiza /> : <Navigate to="/" />} />
        <Route path="/usuarios" element={authenticated ? <Usuarios /> : <Navigate to="/" />} /> */}

      </Routes>
    </Router>
  );
};

export default AppRoutes;