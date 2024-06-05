import React from 'react';

import { PiSpinnerBold } from 'react-icons/pi';
const style = {
	wrapper: `h-[30vh] flex justify-center items-center`,
};

export const Loading = () => {
	return (
		<div className={style.wrapper}>
			<PiSpinnerBold
				color='#009E60'
				size={30}
				className='rotation'
				data-testid='spinner'
			/>
		</div>
	);
};
