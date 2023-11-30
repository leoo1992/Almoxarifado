/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faImage, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import CartContext from '../../context/CartContext';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

import {
	MDBBtn,
	MDBCard,
	MDBCardImage,
	MDBCardTitle,
	MDBCardOverlay,
	MDBRow,
	MDBCol,
} from 'mdb-react-ui-kit';

const ProductCard = ({ data }) => {

	const { title, thumbnail, quantity } = data;
	const { cartItems, setCartItems } = useContext(CartContext);
	const [showArrow, setShowArrow] = useState(false);

	const getThemeFromLocalStorage = () => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme) {
			return storedTheme;
		} else {
			return 'dark';
		}
	};

	const handleAddCart = () => {
		setCartItems([...cartItems, data]);
		setShowArrow(true);
		setTimeout(() => {
			setShowArrow(false);
		}, 500);
		toast.success('Adicionado ao carrinho');
	};

	const carrinhoTooltip = (
		<Tooltip className="custom-tooltip p-0 m-0" id="add-cart">Adicionar ao carrinho</Tooltip>
	);
	const infoTooltip = (
		<Tooltip className="custom-tooltip3 p-0 m-0" id="add-cart">Informações</Tooltip>
	);
	const qtdTooltip = (
		<Tooltip className="custom-tooltip4 p-0 m-0" id="add-cart">Quantidade</Tooltip>
	);
	return (
		<>
			<MDBRow className="row-cols m-2 d-flex justify-content-between align-content-between align-items-center img-product pb-5 ">
				<ToastContainer
					position="top-right"
					autoClose={500}
					hideProgressBar={true}
					newestOnTop={false}
					closeOnClick={false}
					rtl={false}
					pauseOnFocusLoss={false}
					draggable={false}
					pauseOnHover={false}
					theme={getThemeFromLocalStorage()}
					shadow={false}
					icon= {() => <FontAwesomeIcon icon={faCartPlus} className={'text-success fw-bold fs-1 bg-transparent shadow-0'} />}
					className='mt-5 pt-1  gap-5 p-0 m-0 shadow-0 opacity-100 bg-opacity-100 bg-transparent text-bg-transparent text-center 
				text-decoration-none border-0 rounded-0 fw-bold text-success'
				/>
				<MDBCol className="p-0 m-0">
					<MDBCard shadow border="success" className="rounded-9 border-3 bg-white shadow-5-strong p-0 m-0" >
						{thumbnail ? (
							<div className="p-4 m-0 rounded-9 bg-transparent">
								<MDBCardImage
									src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
									alt={title || 'item desconhecido'}
									tag={title || 'item desconhecido'}
									fluid
									position="top"
									className="rounded-9 p-5 m-0 bg-transparent"
								/>
							</div>
						) : (
							<div className="d-flex justify-content-center align-content-center align-items-center rounded-9 p-5 m-0">
								<FontAwesomeIcon
									icon={faImage}
									className="p-2 m-0 w-100 h-100 text-secondary"
								/>
							</div>
						)}
						<MDBCardOverlay className="d-flex flex-column align-content-between justify-content-between align-items-stretch p-2">
							<MDBRow className="p-0 m-0 row-cols p-0 m-0 d-flex justify-content-center 
                                            align-content-center align-items-center text-center">
								<MDBCard className="rounded-7 shadow-5-strong bg-dark opacity-80 border border-3 border-success p-0">
									<MDBCardTitle className="p-2 m-0 text-center text-white fw-bolder fs-6 bg-transparent">
										{title || 'item desconhecido'}
									</MDBCardTitle>
								</MDBCard >
							</MDBRow>
							<MDBRow className="p-0 m-0 p-0 m-0 d-flex justify-content-end 
                                        align-content-end align-items-end text-end">
								<OverlayTrigger placement="top" overlay={qtdTooltip}>
									<input
										type="number"
										placeholder="Qtd"
										value={quantity || 0}
										className=" tamanho-inputs p-1 mb-1 rounded-9 text-center bg-body-secondary 
                                    shadow-5-strong border border-primary border-3 opacity-80"
									/>
								</OverlayTrigger>
								<OverlayTrigger placement="top" overlay={infoTooltip}>
									<MDBBtn
										size="sm"
										className="border border-3 border-primary shadow-5-primary 
                                                fw-bolder p-0 mb-1 rounded-circle w-responsive w-auto
                                                d-flex justify-content-center align-content-center align-items-center 
                                                text-center btn-info shadow-5-strong opacity-80">
										<FontAwesomeIcon icon={faCircleInfo} className="p-1 m-0 fs-4" />
									</MDBBtn>
								</OverlayTrigger>
								<OverlayTrigger placement="top" overlay={carrinhoTooltip}>
									<MDBBtn
										size="sm"
										onClick={handleAddCart}
										className="border border-3 border-success shadow-5-primary 
                                                fw-bolder p-0 mb-1 rounded-circle w-responsive w-auto
                                                d-flex justify-content-center align-content-center align-items-center 
                                                text-center shadow-5-strong opacity-80">
										<FontAwesomeIcon icon={faCartPlus} className="p-2 m-0 fs-6" />
										{showArrow && <div className="arrow"></div>}
									</MDBBtn>
								</OverlayTrigger>
							</MDBRow>
						</MDBCardOverlay>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		</>
	);
};

export default ProductCard;
