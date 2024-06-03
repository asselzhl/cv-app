import React from 'react';
import { FaAngleLeft, FaBars, FaAngleUp } from 'react-icons/fa6';

type ButtonMapKeys = 'knowMore' | 'goBack' | 'togglePanel' | 'goToTop';
interface ButtonMapValues {
	text: string;
	style;
	icon?: JSX.Element;
}

interface ButtonProps {
	buttonConfig: string;
	onClick?: () => void;
}

const buttonMap: Record<ButtonMapKeys, ButtonMapValues> = {
	knowMore: {
		text: 'know more',
		style: {
			button:
				'uppercase bg-[#009E60] text-white rounded py-[10px] px-[20px] hover:bg-[#002147] duration-300',
		},
	},
	goBack: {
		text: 'Go back',
		style: {
			button:
				'text-white flex items-center gap-x-2.5 hover:bg-[#009E60] duration-300 rounded py-[10px] px-[20px]',
			span: 'hidden sm:inline',
		},
		icon: <FaAngleLeft />,
	},
	togglePanel: {
		text: '',
		style: {
			button: 'absolute right-[-35px] bg-[#222935] p-3 rounded-r-lg z-10',
		},
		icon: <FaBars color='white' />,
	},
	goToTop: {
		text: '',
		style: {
			button: 'fixed right-10 bottom-0 bg-[#222935] p-3 rounded-t-lg z-10',
		},
		icon: <FaAngleUp color='white' />,
	},
};

export const Button = ({ buttonConfig, onClick }: ButtonProps) => {
	const config: ButtonMapValues = buttonMap[buttonConfig];
	return (
		<button className={config.style.button} onClick={onClick}>
			{config.icon}
			<span className={config.style.span}>{config.text}</span>
		</button>
	);
};
