import React, { useState, useRef, useEffect } from "react";
import { Form, Container, Row, Col } from 'react-bootstrap';
import api from "./axiosConfig";
import "./login.css";
import { MDBInput, MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const FormLogin = () => {

  const [isFormValid, setIsFormValid] = useState(true);
  const [showInactive, setShowInactive] = useState(true);
  const [passwordType, setPasswordType] = useState("password");
  const [isUserFilled, setIsUserFilled] = useState(false);
  const [isPasswordFilled, setIsPasswordFilled] = useState(false);

  const errorRef = useRef(null),
    [formData, setFormData] = useState({
      usuario: "",
      senha: "",
    });

  const [formErrors, setFormErrors] = useState({
    usuario: "",
    senha: "",
  });

  useEffect(() => {
    setPasswordType(showInactive ? "password" : "text");
  }, [showInactive]);

  useEffect(() => {
    if (errorRef.current) {
      errorRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [formErrors]);

  const handleChange = async (e) => {
    const { name, value } = e.target;

    if (name === "senha") {
      const sanitizedValue = value.replace(/\s/g, "");
      setFormData((prevData) => ({ ...prevData, [name]: sanitizedValue }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    const hasErrors = Object.values(formErrors).some((error) => error !== "");
    setIsFormValid(!hasErrors);

    if (name === "usuario") {
      setIsUserFilled(!!value);
    }

    if (name === "senha") {
      setIsPasswordFilled(!!value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requiredFields = ["usuario", "senha"];
    const errors = {};

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        errors[field] = "Campo obrigatório";
      }
    });

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    api
      .post("/login", formData)
      .then((response) => {
        if (response.data.token) {

          localStorage.setItem("token", response.data.token);
          Cookies.set('token', response.data.token, { expires: 1 / 24, secure: true, sameSite: 'strict' });

          setFormErrors({});

          toast.success("Login efetuado com sucesso...Redirecionando");

          setTimeout(() => {
            window.location.href = "/home";
          }, 5000);

        } else {
          toast.error("Usuário ou senha incorretos");
        }
      })
      .catch(() => {
        toast.error("Ocorreu um erro ao fazer login. Tente novamente mais tarde.");
      });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme='dark'
      />
      <Container className="form-login mt-4 fw-semibold">
        <Row className="justify-content-center">
          <Col className='p-3 rounded-5 shadow bg-primary-subtle'>
            <h3 className='text-center mt-2 fw-bold text-primary text-store'>IA.<span className='text-success'>Store</span></h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail" className='mt-3'>
                <MDBInput
                  wrapperClass='mb-4'
                  label='Usuario'
                  id='usuario'
                  type='email'
                  name='usuario'
                  value={formData.usuario}
                  className='shadow border border-secondary-subtle border-2 rounded-5 text-center bg-body'
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
                {formErrors.usuario && (
                  <div className="error-message">{formErrors.usuario}</div>
                )}
              </Form.Group>
              <Form.Group controlId="formBasicPassword" className='mt-3'>
                <MDBInput
                  wrapperClass='mb-1'
                  label='Senha'
                  id='senha'
                  name='senha'
                  type={passwordType}
                  value={formData.senha}
                  className='shadow border border-secondary-subtle border-2 rounded-5 text-center bg-body'
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </Form.Group>
              <div className="container d-flex m-0 p-0 justify-content-end">
                <OverlayTrigger placement="bottom" overlay={<Tooltip id="ocultar-button-tooltip">Mostrar / Ocultar Senha</Tooltip>}>
                  <FontAwesomeIcon
                    icon={showInactive ? faEye : faEyeSlash}
                    onClick={() => setShowInactive(!showInactive)}
                    className={`p-1 fs-6 d-flex btn btn-primary fw-bold border-1 shadow mt-3 rounded-circle border border-secondary-subtle`}
                  />
                </OverlayTrigger>
              </div>
              {formErrors.senha && (
                <div className="error-message">{formErrors.senha}</div>
              )}
              {!isFormValid && (
                <div className="error-message">
                  Usuário ou senha incorretos.
                </div>
              )}
              <Col className='d-flex flex-nowrap justify-content-center mt-4 p-0 shadow-none'>
                <MDBBtnGroup className="shadow-none">
                  <OverlayTrigger placement="bottom" overlay={<Tooltip id="ocultar-button-tooltip">Cadastrar</Tooltip>}>
                    <MDBBtn
                      href="/cadastro-usuarios"
                      className='fw-bold text-white shadow'
                      color='primary'
                      rounded
                    >
                      Cadastrar
                    </MDBBtn>
                  </OverlayTrigger>
                  <OverlayTrigger placement="bottom" overlay={<Tooltip id="ocultar-button-tooltip">Entrar</Tooltip>}>
                    <MDBBtn
                      type="submit"
                      className='fw-bold text-white shadow'
                      color='success'
                      disabled={!isUserFilled || !isPasswordFilled}
                      rounded

                    >
                      Entrar
                    </MDBBtn>
                  </OverlayTrigger>
                </MDBBtnGroup>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormLogin;
