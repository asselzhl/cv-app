import React from 'react';

const style = {
	wrapper: `h-[30vh] flex justify-center items-center`,
};

interface FailedProps {
	text: string;
}

export const Failed = ({ text }: FailedProps) => {
	return (
		<div className={style.wrapper}>
			<p className='text-red-500'>{text}</p>
		</div>
	);
};
