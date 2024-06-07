import React from 'react';

const style = {
	wrapper: `h-[30vh] flex justify-center items-center`,
	text: `text-red-500`,
};

interface FailedProps {
	text: string;
}

export const Failed = ({ text }: FailedProps) => {
	return (
		<div className={style.wrapper}>
			<p className={style.wrapper}>{text}</p>
		</div>
	);
};
