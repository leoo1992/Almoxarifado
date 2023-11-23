import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { MDBBtn } from 'mdb-react-ui-kit';

function Cart() {

	const totalCounters = useState(999);
 
	return (
		<>
			<MDBBtn
				rounded
				className="m-0 p-1 d-flex justify-content-center align-content-center align-items-center fw-bold shadow border bg-primary "
				size="lg"
				color="none"
			>
				<span className="badge rounded-9 text-white fw-bold m-0 rounded-circle bg-success">{totalCounters}</span>
				<FontAwesomeIcon icon={faShoppingBasket}
					className="text-white m-0 p-1 rounded-circle fs-3 "
				/>
			</MDBBtn>
		</>
	);
}

export default Cart;
