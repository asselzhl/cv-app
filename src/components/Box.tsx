import React from 'react';

const style = {
	title: `text-[#009E60] font-bold text-2xl mb-8`,
};

type BoxMapKeys =
	| 'about'
	| 'education'
	| 'experience'
	| 'skills'
	| 'portfolio'
	| 'contacts'
	| 'feedbacks';
interface BoxMapValues {
	title: string;
	content: JSX.Element;
	id: BoxMapKeys;
}

interface BoxProps {
	box: BoxMapValues;
}

export const Box = ({ box }: BoxProps) => {
	return (
		<div id={box.id}>
			<h2 className={style.title}>{box.title}</h2>
			{box.content}
		</div>
	);
};
