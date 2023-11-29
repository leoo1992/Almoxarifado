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
			className='mt-0 mb-2 p-0 border rounded-9 bg-body-secondary shadow-0'>

			<MDBRow className='m-0 mt-3 p-0 d-flex justify-content-center align-content-center align-items-center'>

				<MDBCol className='col-4 m-0 p-0 d-flex justify-content-start align-content-center align-items-center'>
					<MDBCardImage src={pregoImage}
						alt="img do produto"
						className="img-product m-0 p-0 d-flex justify-content-center align-content-center align-items-center rounded-9 w-100"
						fluid
					/>
				</MDBCol>

				<MDBCol className='col-6 m-0 p-2'>
					<MDBCardTitle className='m-0 p-0 fs-6 fw-normal font-monospace' >
						asdsdassdsadaaaaaaaas
					</MDBCardTitle>
				</MDBCol>

				<MDBCol className='col-1 m-0 p-0 d-flex justify-content-center align-content-center align-items-center '>
					<MDBBtn
						color='transparent'
						size="sm"
						className="p-0 m-0 text-danger shadow-0 text-center">
						<FontAwesomeIcon icon={faTrash} className="p-0 m-0 fs-6" />
					</MDBBtn>
				</MDBCol>

			</MDBRow>

			<MDBRow className='m-0 p-0 d-flex justify-content-end align-content-center align-items-center'>

			</MDBRow>

			<MDBRow className='mb-2 me-2 mt-1 p-0 d-flex justify-content-end align-content-center align-items-center gap-3'>
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
