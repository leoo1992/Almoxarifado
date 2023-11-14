import React, { useState, useRef, useEffect } from "react";
import { Form, Container, Row, Col } from 'react-bootstrap';
import api from "./axiosConfig";
import "./cadastroUser.css";
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const FormCadastroUser = () => {
    const navigate = useNavigate();
    const [isFormValid, setIsFormValid] = useState(true);
    const [showInactive, setShowInactive] = useState(true);
    const [passwordType, setPasswordType] = useState("password");
    const errorRef = useRef(null);
    // eslint-disable-next-line
    const [isUserFilled, setIsUserFilled] = useState(false);
    // eslint-disable-next-line
    const [isPasswordFilled, setIsPasswordFilled] = useState(false);
    // eslint-disable-next-line
    const [isConfirmPasswordFilled, setIsConfirmPasswordFilled] = useState(false);
    const [confirmSenha, setConfirmSenha] = useState("");
    const [senha, setSenha] = useState("");
    const [usuario, setUser] = useState("");
    const [validaEmail, setValidaEmail] = useState(false);
    const [validaSenha, setValidaSenha] = useState(false);
    const [validaCSenha, setValidaCSenha] = useState(false);

    useEffect(() => {
        setPasswordType(showInactive ? "password" : "text");
    }, [showInactive]);

    const [formData, setFormData] = useState({
        usuario: "",
        senha: "",
    });

    const [formErrors, setFormErrors] = useState({
        usuario: "",
        senha: "",
        confirmSenha: ""
    });

    const validaFormulario = (validaEmail, validaSenha, validaCSenha) => {
        if (validaEmail && validaSenha && validaCSenha) {
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

        if (name === "usuario") {
            setUser(value);
            setIsUserFilled(!!value);
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

            if (!emailRegex.test(value) || !value.includes(".") || !value.includes("@") || value.length === 0 || !value) {
                newFormErrors.usuario = <span className="fs-6 text-danger p-0 m-0">* Email inválido</span>;
                setValidaEmail(false);
                setIsFormValid(false);
            } else {
                newFormErrors.usuario = false;
                setValidaEmail(true);
                validaFormulario(true, validaSenha, validaCSenha);
            }
        }


        if (name === "senha") {
            setSenha(value);
            const senhaRegex = /^(?=(?:.*[A-Za-z]){3})(?=(?:.*\W){1})(?=(?:.*\d){4}).{8,}$/;

            if (value !== confirmSenha || value.length !== 8 || value.includes(" ") || !value || !senhaRegex.test(value)) {
                newFormErrors.senha = (
                    <span className="fs-6 text-danger p-0 m-0">
                        * Senha inválida -
                        <span className="text-primary fw-light fs-6 p-0 m-0">
                            _ Obrigatório: <br />
                            <span className="d-flex justify-content-center align-content-center text-center">
                                3 letras, 1 símbolo e 4 números
                            </span>
                        </span>
                    </span>
                );
                setValidaSenha(false);
                setIsFormValid(false);
            } else {
                newFormErrors.senha = false;
                setValidaSenha(true);
                validaFormulario(validaEmail, true, validaCSenha);
            }
        }

        if (name === "confirmSenha") {
            setConfirmSenha(value);
            const confSenhaRegex = /^(?=(?:.*[A-Za-z]){3})(?=(?:.*\W){1})(?=(?:.*\d){4}).{8,}$/;


            if (value !== senha || value.length !== 8 || value.includes(" ") || !value || !confSenhaRegex.test(value)) {
                newFormErrors.confirmSenha = (
                    <span className="fs-6 text-danger">
                        * Não correspondente:
                    </span>
                );

                setValidaCSenha(false);
                setIsFormValid(false);

            } else {
                newFormErrors.confirmSenha = "";
                setValidaCSenha(true)
                validaFormulario(validaEmail, validaSenha, true);
            }
        }

        setFormErrors(newFormErrors);
        setIsUserFilled(!!usuario);
        setIsPasswordFilled(!!senha);
        setIsConfirmPasswordFilled(!!confirmSenha);
    };



    const handleSubmit = (e) => {
        e.preventDefault();

        const requiredFields = ["usuario", "senha", "confirmSenha"];
        const errors = {};

        requiredFields.forEach((field) => {
            if (!formData[field]) {
                errors[field] = "Campo obrigatório";
            } else {
                errors[field] = "";
            }
        });

        if (formData.senha !== confirmSenha) {
            errors.confirmSenha = "As senhas não coincidem";
        } else {
            errors.confirmSenha = "";
        }

        if (formData.confirmSenha !== senha) {
            errors.confirmSenha = "As senhas não coincidem";
        } else {
            errors.confirmSenha = "";
        }

        setFormErrors(errors);

        const hasErrors = Object.keys(errors).some((key) => key !== "confirmSenha" && errors[key] !== "");

        if (hasErrors) {
            return;
        }

        const cleanFormData = { ...formData };
        delete cleanFormData.confirmSenha;

        api
            .post("/cadastrousuarios", cleanFormData)
            .then((response) => {
                if (response.data.message) {
                    setFormErrors({});
                    toast.success("Cadastro efetuado com sucesso...Redirecionando");
                    setTimeout(() => {
                        navigate("/");
                    }, 4000);
                } else {
                    toast.error("Verifique os requerimentos de cadastro");
                }
            })
            .catch(() => {
                toast.error("Ocorreu um erro ao cadastrar. Tente novamente mais tarde.");
            });
    };

    useEffect(() => {
        if (errorRef.current) {
            errorRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [formErrors]);

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
                                    wrapperClass='mb-4'
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
                            {formErrors.senha && (

                                <div className="error-message">{formErrors.senha}</div>
                            )}
                            <Form.Group controlId="formBasicPassword2" className='mt-3'>
                                <MDBInput
                                    wrapperClass='mb-1'
                                    label='Confirmar senha'
                                    id='confirmSenha'
                                    name='confirmSenha'
                                    type={passwordType}
                                    value={confirmSenha}
                                    className='shadow border border-secondary-subtle border-2 rounded-5 text-center bg-body'
                                    onChange={handleChange}
                                    required
                                    autoComplete="off"
                                />
                                {formErrors.senha && (
                                    <div className="error-message">{formErrors.confirmSenha}</div>
                                )}
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
                            {!isFormValid && (
                                <div className="error-message text-primary text-center fs-6 m-0 p-0 fw-normal">
                                    * Preencha todos os campos
                                </div>
                            )}
                            <Col className='d-flex flex-nowrap justify-content-center mt-4 p-0 shadow-none'>
                                <OverlayTrigger placement="bottom" overlay={<Tooltip id="ocultar-button-tooltip">Cadastrar</Tooltip>}>
                                    <MDBBtn
                                        type="submit"
                                        className='fw-bold text-white shadow border border-1 border-white'
                                        color='success'
                                        disabled={!isFormValid}
                                        rounded
                                    >
                                        Cadastrar
                                    </MDBBtn>
                                </OverlayTrigger>
                            </Col>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default FormCadastroUser;
