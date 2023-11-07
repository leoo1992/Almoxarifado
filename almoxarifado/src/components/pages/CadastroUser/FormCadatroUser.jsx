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
    const [isFormValid, setIsFormValid] = useState(false);
    const [showInactive, setShowInactive] = useState(true);
    const [passwordType, setPasswordType] = useState("password");
    const [isPasswordFilled, setIsPasswordFilled] = useState(false);
    const errorRef = useRef(null);
    const [isConfirmPasswordFilled, setIsConfirmPasswordFilled] = useState(false);
    const [confirmSenha, setConfirmSenha] = useState("");
    const [senha, setSenha] = useState("");

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

    const handleChange = async (e) => {
        const { name, value } = e.target;
        const trimmedValue = value.trim();
        setFormData((prevData) => ({ ...prevData, [name]: trimmedValue }));

        let isFormValid = false;
        let newFormErrors = { ...formErrors };

        if (name === "usuario") {
            if (value.includes(".") && value.includes("@")) {
                newFormErrors.usuario = "";
                isFormValid = true;
            } else {
                newFormErrors.usuario = "Email inválido";
                isFormValid = false;
            }

            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (emailRegex.test(value)) {
                newFormErrors.usuario = "";
                isFormValid = true;
            } else {
                newFormErrors.usuario = "Email inválido";
                isFormValid = false;
            }
        }

        if (name === "senha") {
            setSenha(value);
            if (value !== confirmSenha) {
                newFormErrors.senha = "As senhas não coincidem";
                isFormValid = false;
            } else {
                if (value.length < 6 || value.includes(" ")) {
                    newFormErrors.senha = "A senha deve ter pelo menos 6 caracteres";
                    isFormValid = false;
                } else {
                    newFormErrors.senha = "";
                    isFormValid = true;
                }
            }
        }

        if (name === "confirmSenha") {
            setConfirmSenha(value);
            if (value !== senha) {
                newFormErrors.confirmSenha = "As senhas não coincidem";
                isFormValid = false;
            } else {
                if (value.length < 6 || value.includes(" ")) {
                    newFormErrors.confirmSenha = "A senha deve ter pelo menos 6 caracteres e não deve conter espaços em branco";
                    isFormValid = false;
                } else {
                    newFormErrors.confirmSenha = "";
                    isFormValid = true;
                }
            }
        }

        if (isFormValid) {
            newFormErrors.usuario = "";
            newFormErrors.senha = "";
            newFormErrors.confirmSenha = "";
            isFormValid = true;
        }

        setIsPasswordFilled(!!senha);
        setIsConfirmPasswordFilled(!!confirmSenha);
        setIsFormValid(isFormValid);
        setFormErrors(newFormErrors);
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
                                <div className="error-message text-primary text-center fs-6 mt-3 fw-normal">
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
