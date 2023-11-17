import React from 'react';
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faImage, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import {
    MDBBtn,
    MDBCard,
    MDBCardImage,
    MDBCardTitle,
    MDBCardOverlay,
    MDBRow,
    MDBCol,

} from 'mdb-react-ui-kit';

const ProductCard = ({ productName, productImg }) => {

    const itemTooltip = (
        <Tooltip className="custom-tooltip2 p-0 m-0" id="nome-produto" delay={{ show: 250, hide: 400 }}>{productName || 'item desconhecido'} </Tooltip>
    );
    const carrinhoTooltip = (
        <Tooltip className="custom-tooltip p-0 m-0" id="add-cart" delay={{ show: 250, hide: 400 }}>Adicionar ao carrinho</Tooltip>
    );
    const infoTooltip = (
        <Tooltip className="custom-tooltip3 p-0 m-0" id="add-cart" delay={{ show: 250, hide: 400 }}>Informações</Tooltip>
    );
    const qtdTooltip = (
        <Tooltip className="custom-tooltip4 p-0 m-0" id="add-cart" delay={{ show: 250, hide: 400 }}>Quantidade</Tooltip>
    );

    return (
        <MDBRow className='row-cols m-2 d-flex justify-content-between align-content-between align-items-center img-product pb-1'>
            <MDBCol className='p-0 m-0'>
                <OverlayTrigger placement="bottom" overlay={itemTooltip} delay={{ show: 250, hide: 400 }}>
                    <MDBCard shadow border='success' className='rounded-9 border-3 bg-transparent shadow-5-strong p-0 m-0' >

                        {productImg ? (
                            <MDBCardImage
                                src={productImg}
                                alt='...'
                                fluid
                                position='top'
                                className="rounded-9 p-5 m-0 bg-transparent"
                            />
                        ) : (
                            <div className="d-flex justify-content-center align-content-center align-items-center rounded-9 p-5 m-0">
                                <FontAwesomeIcon
                                    icon={faImage}
                                    className="p-2 m-0 w-100 h-100 text-secondary"
                                />
                            </div>
                        )}

                        <MDBCardOverlay className="d-flex flex-column align-content-between justify-content-between align-items-stretch p-3">
                            <MDBRow className='p-0 m-0 row-cols p-0 m-0 d-flex justify-content-center 
                                            align-content-center align-items-center text-center'>
                                <MDBCard className="rounded-9 shadow-5-strong bg-primary bg-opacity-0 border border-5 border-success p-1">
                                    <MDBCardTitle className="p-1 m-0 text-center text-white fw-bolder fs-6">
                                        {productName || 'item desconhecido'}
                                    </MDBCardTitle>
                                </MDBCard >
                            </MDBRow>
                            <MDBRow className='p-0 m-0 p-0 m-0 d-flex justify-content-end 
                                        align-content-end align-items-end text-end'>
                                <OverlayTrigger placement="top" overlay={qtdTooltip} delay={{ show: 250, hide: 400 }}>
                                    <input
                                        type="number"
                                        placeholder="Qtd"
                                        className="w-25 p-1 mb-1 rounded-9 text-center bg-body-secondary 
                                    shadow-5-strong border border-primary border-4"
                                    />
                                </OverlayTrigger>

                                <OverlayTrigger placement="top" overlay={infoTooltip} delay={{ show: 250, hide: 400 }}>
                                    <MDBBtn
                                        size='sm'
                                        className="border border-5 border-primary shadow-5-primary 
                                                fw-bolder p-0 mb-1 rounded-circle w-responsive w-auto
                                                d-flex justify-content-center align-content-center align-items-center 
                                                text-center btn-info shadow-5-strong">
                                        <FontAwesomeIcon icon={faCircleInfo} className="p-1 m-0 fs-4" />
                                    </MDBBtn>
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={carrinhoTooltip} delay={{ show: 250, hide: 400 }}>
                                    <MDBBtn
                                        size='sm'
                                        className="border border-5 border-success shadow-5-primary 
                                                fw-bolder p-0 mb-1 rounded-circle w-responsive w-auto
                                                d-flex justify-content-center align-content-center align-items-center 
                                                text-center shadow-5-strong">
                                        <FontAwesomeIcon icon={faCartPlus} className="p-2 m-0 fs-6" />
                                    </MDBBtn>
                                </OverlayTrigger>

                            </MDBRow>
                        </MDBCardOverlay>
                    </MDBCard>
                </OverlayTrigger>
            </MDBCol>
        </MDBRow>
    );
};

export default ProductCard;
