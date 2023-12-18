import React, { useContext, useEffect } from 'react';
//eslint-disable-next-line
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import {
	MDBBtn,
	MDBCard,
	MDBCardImage,
	MDBCardTitle,
	MDBRow,
	MDBCol
} from 'mdb-react-ui-kit';
import CartContext from '../../context/CartContext';
import Provider from '../../context/Provider';

//eslint-disable-next-line
function CartItem({ data, removeItem }) {
	//eslint-disable-next-line
	const { cartItems, setTotalQuantity, myCart, removerItemCart } = useContext(CartContext);
	//eslint-disable-next-line
	const { index, title, thumbnail } = data;

	useEffect(() => {
	}, [myCart, index, setTotalQuantity, cartItems]);

	const removeItemFromCart = () => {
		removeItem(index);
		removerItemCart(index);
	};

	return (
		<Provider>
			<MDBCard
				className='mt-0 mb-2 p-0 border rounded-9 bg-body-secondary shadow-1-strong'>
				<MDBRow className='m-0 mt-3 p-0 d-flex justify-content-center align-content-center align-items-start'>
					<MDBCol className='col-4 m-0 p-0 pt-4 d-flex justify-content-center align-content-center align-items-center'>
						<MDBCardImage
							src={thumbnail}
							alt={title}
							className="img-product m-0 p-0 d-flex justify-content-center align-content-center align-items-center rounded-9 w-100 shadow-5-strong"
							fluid
						/>
					</MDBCol>
					<MDBCol className='col-6 m-0 p-0'>
						<MDBCardTitle className='m-1 p-1 fs-6 fw-normal font-monospace' >
							{title}
						</MDBCardTitle>
					</MDBCol>
					<MDBCol className='col-1 m-0 p-0 d-flex justify-content-center align-content-start align-items-start'>
						<MDBBtn
							onClick={removeItemFromCart}
							color='transparent'
							size="sm"
							className="p-0 m-0 text-danger shadow-0 text-center">
							<FontAwesomeIcon icon={faTrash} className="p-0 m-0 fs-6" />
						</MDBBtn>
					</MDBCol>
				</MDBRow>
			</MDBCard>
		</Provider>
	);
}

export default CartItem;
