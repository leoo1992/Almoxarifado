import React, { useState, useEffect } from 'react';
import {
	ThreeCircles,
	BallTriangle,
	Triangle,
} from 'react-loader-spinner';

function Loading() {
	const [currentSpinner, setCurrentSpinner] = useState(0);

	const spinners = [
		<>
			<ThreeCircles
				key={1}
				height="80"
				width="80"
				color="#4fa94d"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
				ariaLabel="three-circles-rotating"
				outerCircleColor=""
				innerCircleColor='green'
				middleCircleColor=""
			/>
			< br />
			<span key={2}>1</span>
		</>,
		<>
			<BallTriangle
				key={3}
				height={80}
				width={80}
				radius={5}
				color="#4fa94d"
				ariaLabel="ball-triangle-loading"
				wrapperClass={{}}
				wrapperStyle=""
				visible={true}
			/>
			< br />
			<span key={4}>2</span>
		</>,
		<>
			<Triangle
				key={5}
				height="80"
				width="80"
				color="#4fa94d"
				ariaLabel="triangle-loading"
				wrapperStyle={{}}
				wrapperClassName=""
				visible={true}
			/>
			< br />
			<span key={6}>3</span>
		</>
	];

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentSpinner((prevSpinner) => (prevSpinner + 1) % spinners.length);
		}, 500);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className='row d-flex justify-content-center align-content-center align-items-center text-center m-0 p-0 gap-2 font-monospace fs-5 center object-center'>
			<div className=' d-flex justify-content-center align-content-center align-items-center text-center p-0 m-0'>
				{spinners[currentSpinner]}
			</div >
   Carregando...
		</div >
	);
}

export default Loading;
