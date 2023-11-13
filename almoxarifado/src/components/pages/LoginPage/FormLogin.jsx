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

  const [isFormValid, setIsFormValid] = useState(false);
  const [showInactive, setShowInactive] = useState(true);
  const [passwordType, setPasswordType] = useState("password");
  // eslint-disable-next-line
  const [isUserFilled, setIsUserFilled] = useState(false);
  // eslint-disable-next-line
  const [isPasswordFilled, setIsPasswordFilled] = useState(false);
  const [senha, setSenha] = useState("");
  // eslint-disable-next-line
  const [usuario, setUser] = useState("");
  const [validaEmail, setValidaEmail] = useState(false);
  const [validaSenha, setValidaSenha] = useState(false);

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

  const validaFormulario = (validaEmail, validaSenha) => {
    if (validaEmail && validaSenha) {
      setIsFormValid(true);
      return isFormValid
    } else {
      setIsFormValid(false);
      return !isFormValid
    }
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    const trimmedValue = value.trim();
    setFormData((prevData) => ({ ...prevData, [name]: trimmedValue }));

    let newFormErrors = { ...formErrors };

    if (name === "senha") {
      const sanitizedValue = value.replace(/\s/g, "");
      setFormData((prevData) => ({ ...prevData, [name]: sanitizedValue }));
      setSenha(value);
      setIsPasswordFilled(!!value);

      if (value.length !== 8 || value.includes(" ") || !value) {
        newFormErrors.senha = " * Senha inválida";
        setValidaSenha(false);
        setIsFormValid(false);
      } else {
        newFormErrors.senha = false;
        setValidaSenha(true);
        validaFormulario(validaEmail, true);
      }
    }

    if (name === "usuario") {
      setUser(value);
      setIsUserFilled(!!value);
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

      if (!emailRegex.test(value) || !value.includes(".") || !value.includes("@") || value.length === 0 || !value) {
        newFormErrors.usuario = " * Email inválido";
        setValidaEmail(false);
        setIsFormValid(false);
      } else {
        newFormErrors.usuario = false;
        setValidaEmail(true);
        validaFormulario(true, validaSenha);
      }
    }

    setFormErrors(newFormErrors);
    setIsUserFilled(!!usuario)
    setIsPasswordFilled(!!senha);
  };



  const handleSubmit = (event) => {
    event.preventDefault();

    const requiredFields = ["usuario", "senha"];
    const errors = {};

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        errors[field] = " * Campo obrigatório";
      }
    });

    setFormErrors(errors);
    if (Object.keys(errors).length > 0 || Object.keys(errors).length < 0 || Object.keys(errors).length !== 0) {
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
          toast.error("* Usuário ou senha incorretos");
        }
      })
      .catch(() => {
        toast.error("* Usuário ou senha incorretos");
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
      <Container className="form-login mt-4 fw-semibold shadow rounded-9">
        <Row className="justify-content-center shadow rounded-9">
          <Col className='p-3 rounded-5 shadow bg-primary-subtle shadow rounded-9'>
            <h3 className='text-center mt-2 fw-bold text-primary text-store'>IA.<span className='text-success'>Store</span></h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail" className='mt-3 fs-6'>
                <MDBInput
                  wrapperClass='mb-4'
                  label='Usuario'
                  id='usuario'
                  type='email'
                  name='usuario'
                  value={formData.usuario}
                  className='shadow border border-white border-5 rounded bg-body fs-6 m-0 p-1 d-flex justify-content-center align-content-center align-items-center'
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
                {formErrors.usuario && (
                  <div className="error-message text-danger fw-bolder fs-6 p-0 m-0">{formErrors.usuario}</div>
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
                  className='shadow border border-white border-5 rounded-5 bg-body fs-6 m-0 p-1 d-flex justify-content-center align-content-center align-items-center'
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
                <div className="error-message text-danger fw-bolder fs-6 p-0 m-0">{formErrors.senha}</div>
              )}
              {!isFormValid && (
                <div className="error-message text-danger fw-bolder fs-6 p-0 m-0">
                  * Usuário ou senha incorretos.
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
                      disabled={!isFormValid}
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
