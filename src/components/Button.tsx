import React from 'react';
import { FaAngleLeft, FaBars } from 'react-icons/fa6';

type ButtonMapKeys = 'knowMore' | 'goBack' | 'togglePanel';
interface ButtonMapValues {
	text: string;
	style: string;
	icon?: JSX.Element;
}

interface ButtonProps {
	buttonConfig: string;
	onClick?: () => void;
}

const buttonMap: Record<ButtonMapKeys, ButtonMapValues> = {
	knowMore: {
		text: 'know more',
		style:
			'uppercase bg-[#009E60] text-white rounded py-[10px] px-[20px] hover:bg-[#002147] duration-300',
	},
	goBack: {
		text: 'Go back',
		style:
			'text-white flex items-center gap-x-2.5 hover:bg-[#009E60] duration-300 rounded py-[10px] px-[20px]',
		icon: <FaAngleLeft />,
	},
	togglePanel: {
		text: '',
		style: 'absolute right-[-35px] bg-[#222935] p-3 rounded-r-lg',
		icon: <FaBars color='white' />,
	},
};

export const Button = ({ buttonConfig, onClick }: ButtonProps) => {
	const config: ButtonMapValues = buttonMap[buttonConfig];
	return (
		<button className={config.style} onClick={onClick}>
			{config.icon}
			<span>{config.text}</span>
		</button>
	);
};
