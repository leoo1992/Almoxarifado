import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
	MDBBtn,
	MDBCard,
	MDBCardImage,
	MDBCardTitle,
	MDBBadge,
	MDBRow,
	MDBCol,
} from 'mdb-react-ui-kit';
import { pregoImage } from '../images';
function CartItem() {

	return (
		<MDBCard
			shadow
			className='mt-2 mb-3 p-0 border rounded-9 shadow-4-strong bg-body-secondary'>
			<MDBRow className='m-0 p-0 d-flex justify-content-start align-content-start align-items-start'>

				<MDBCol className='col-10 m-0 p-0 d-flex justify-content-start align-content-center align-items-center'>
					<MDBCardImage src={pregoImage}
						alt="img do produto"
						className="img-product m-0 p-1 d-flex justify-content-center align-content-center align-items-center rounded-9 w-50"
						fluid
						shadow
					/>
				</MDBCol>

				<MDBCol className='col-2 mt-3 p-0 d-flex justify-content-center align-content-center align-items-center '>
					<MDBBtn
						color='transparent'
						size="sm"
						className="p-0 m-0 text-danger shadow-0">
						<FontAwesomeIcon icon={faTrash} className="p-0 m-0 fs-6" />
					</MDBBtn>
				</MDBCol>

			</MDBRow>

			<MDBRow className='m-0 p-0 d-flex justify-content-end align-content-center align-items-center'>
				<MDBCol className='m-0 p-0'>
					<MDBCardTitle className='m-3 p-0 fs-6 fw-normal font-monospace' >
						asdsdassdsadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas
					</MDBCardTitle>
				</MDBCol>
			</MDBRow>

			<MDBRow className='mb-3 me-3 mt-1 p-0 d-flex justify-content-end align-content-center align-items-center gap-3'>
				<MDBCol className='col-1 m-0 p-0 text-center d-flex justify-content-center align-content-center align-items-center'>
					<MDBBtn
						color='transparent'
						size="sm"
						className="p-0 m-0
     d-flex justify-content-center align-content-center align-items-center text-danger shadow-0">
						<FontAwesomeIcon icon={faMinus} className="p-0 m-0 fs-6" />
					</MDBBtn>
				</MDBCol>

				<MDBCol className='col-1 m-0 p-0 text-center d-flex justify-content-center align-content-center align-items-center'>
					<MDBBadge className='m-0 P-0'>01</MDBBadge>
				</MDBCol>

				<MDBCol className='col-1 m-0 p-0 text-center d-flex justify-content-start align-content-start align-items-start'>
					<MDBBtn
						color='transparent'
						size="sm"
						className="p-0 m-0
      d-flex justify-content-center align-content-center align-items-center text-success shadow-0">
						<FontAwesomeIcon icon={faPlus} className="p-0 m-0 fs-6" />
					</MDBBtn>
				</MDBCol>

			</MDBRow>
		</MDBCard>
	);
}

export default CartItem;
