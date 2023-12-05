import React, { useState, useContext, useEffect } from 'react';
//eslint-disable-next-line
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faMinus, } from '@fortawesome/free-solid-svg-icons';
import {
	MDBBtn,
	MDBCard,
	MDBCardImage,
	MDBCardTitle,
	MDBRow,
	MDBCol,
	MDBInput
} from 'mdb-react-ui-kit';
import CartContext from '../../context/CartContext';
import Provider from '../../context/Provider';

//eslint-disable-next-line
function CartItem({ data, removeItem }) {
	//eslint-disable-next-line
	const { cartItems, setQuantity, totalQuantity, setTotalQuantity } = useContext(CartContext);
	//eslint-disable-next-line
	const { index, id, title, thumbnail } = data;

	const [quantidade, setQuantidade] = useState(1);

	useEffect(() => {
		setTotalQuantity(
			Object.values(cartItems).reduce((acc, value) => acc + parseInt(value, 10), 0)
		);
	}, [cartItems]);

	const handleQuantidadeChange = (event) => {
		let inputValue = parseInt(event.target.value, 10);
		let newQuantity = Math.min(Math.max(inputValue, 1), 999);
		setQuantidade(newQuantity);
		setTotalQuantity(newQuantity);
		setQuantity(id, newQuantity);
	};

	const removeItemFromCart = () => {
		removeItem(index);
	};

	const addQuantity = () => {
		const newQuantity = Math.min(quantidade + 1, 999);
		setQuantidade(newQuantity);
		setTotalQuantity(newQuantity);
		setQuantity(id, newQuantity);
	};

	const subtractQuantity = () => {
		const newQuantity = Math.max(quantidade - 1, 1);
		setQuantidade(newQuantity);
		setTotalQuantity(newQuantity);
		setQuantity(id, newQuantity);

		if (newQuantity === 1) {
			removeItemFromCart();
		}
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
				<label className='m-0 p-0 fs-6 fw-bold text-center'>Quantidade:</label>
				<MDBRow className='m-0 p-0 d-flex justify-content-center align-content-center align-items-center'>
					<MDBCol className='col-1 m-0 p-0 text-center d-flex justify-content-center align-content-center align-items-center'>
						<MDBBtn
							onClick={subtractQuantity}
							color='transparent'
							size="sm"
							className="p-0 m-0
     d-flex justify-content-center align-content-center align-items-center text-danger shadow-0">
							<FontAwesomeIcon icon={faMinus} className="p-0 m-0 fs-6" />
						</MDBBtn>
					</MDBCol>
					<MDBCol className='m-1 col-4 text-center d-flex justify-content-center align-content-center align-items-center'>
						<MDBInput
							type="number"
							id='floatingInput'
							size='sm'
							value={quantidade}
							min={1}
							max={999}
							onChange={handleQuantidadeChange}
							rounded
							className="fw-bold text-end bg-body text-black shadow-5 border-black fs-6 p-1 m-0 rounded-5 shadow-2-strong"
						/>
					</MDBCol>
					<MDBCol className='col-1 m-0 p-0 text-center d-flex justify-content-start align-content-start align-items-start'>
						<MDBBtn
							onClick={addQuantity}
							color='transparent'
							size="sm"
							className="p-0 m-0
      d-flex justify-content-center align-content-center align-items-center text-success shadow-0">
							<FontAwesomeIcon icon={faPlus} className="p-0 m-0 fs-6" />
						</MDBBtn>
					</MDBCol>
				</MDBRow>
			</MDBCard>
		</Provider>
	);
}

export default CartItem;
