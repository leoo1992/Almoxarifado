import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import {
	MDBBtn,
	// MDBCard,
	// MDBCardImage,
	// MDBCardTitle,
	// MDBCardOverlay,
	MDBBadge,
	MDBRow,
	MDBCol,
} from 'mdb-react-ui-kit';
function CartItem() {

	return (
		<section className='m-0 p-0'>
			<MDBRow className='m-0 p-0 d-flex justify-content-center align-content-center align-items-center'>
				<MDBCol className='m-0 p-0 d-flex justify-content-center align-content-center align-items-center'>
					<img src="a"
						alt="img do produto"
						className="img-product m-0 p-0 d-flex justify-content-center align-content-center align-items-center"
					/>
				</MDBCol>
			</MDBRow>

			<MDBRow className='m-0 p-0 d-flex justify-content-center align-content-center align-items-center gap-2'>
				<MDBCol className='col-1 m-0 p-0 text-center d-flex justify-content-center align-content-center align-items-center'>
					<MDBBtn
						color='transparent'
						size="sm"
						className="p-0 m-0
      d-flex justify-content-center align-content-center align-items-center text-success">
						<FontAwesomeIcon icon={faPlus} className="p-0 m-0 fs-6" />
					</MDBBtn>
				</MDBCol>

				<MDBCol className='col-1 m-0 p-0 text-center d-flex justify-content-center align-content-center align-items-center'>
					<MDBBadge className='m-0 P-0'>01</MDBBadge>
				</MDBCol>

				<MDBCol className='col-1 m-0 p-0 text-center d-flex justify-content-center align-content-center align-items-center'>
					<MDBBtn
						color='transparent'
						size="sm"
						className="p-0 m-0
     d-flex justify-content-center align-content-center align-items-center text-danger">
						<FontAwesomeIcon icon={faMinus} className="p-0 m-0 fs-6" />
					</MDBBtn>
				</MDBCol>

			</MDBRow>
		</section>
	);
}

export default CartItem;
