import { React, useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import {
    MDBBtn,
    MDBCard,
    MDBCardImage,
    MDBCardTitle,
    MDBCardOverlay,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';

const ProductCard = () => {

    return (
        <MDBRow className='row-cols g-4 m-1 d-flex justify-content-between align-content-between'>
            <MDBCol>
                <MDBCard shadow border='primary' className='rounded-9 border-3 bg-transparent' >

                    <MDBCardImage
                        src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                        alt='...'
                        fluid
                        position='top'
                        className="rounded-9 p-1 bg-transparent"
                    />


                    <MDBCardOverlay className="d-flex justify-content-end align-content-end align-items-end">

                        <MDBCard className="w-auto p-1 m-0">
                            <MDBRow className='row-cols p-0 m-0'>
                                <MDBCardTitle className="p-0 m-0 text-center text-black fw-bolder fs-6">
                                    Produto 1
                                </MDBCardTitle>
                            </MDBRow>
                        </MDBCard >

                        <MDBRow className='row-cols p-0 m-0'>
                            <MDBCol>
                                <MDBBtn className="border border-2 border-white shadow-6-strong shadow-5-primary fw-bolder p-1 m-0" rounded size='sm'>
                                    <MDBRow className="d-flex justify-content-center align-content-center align-items-center p-0 m-0">
                                        <MDBCol className="">
                                            <FontAwesomeIcon icon={faCartPlus} className="p-0 m-0" />
                                        </MDBCol>
                                    </MDBRow>
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>

                    </MDBCardOverlay>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    );
};

export default ProductCard;
