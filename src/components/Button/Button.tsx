import React from 'react';
import { buttonMap } from '../../helpers/buttonMap';

interface ButtonMapValues {
	text: string;
	style;
	icon?: JSX.Element;
}
interface ButtonProps {
	buttonConfig: string;
	onClick?: () => void;
}

export const Button = ({ buttonConfig, onClick }: ButtonProps) => {
	const config: ButtonMapValues = buttonMap[buttonConfig];
	return (
		<button
			className={config.style.button}
			onClick={onClick}
			data-testid='button'
		>
			{config.icon}
			<span className={config.style.span}>{config.text}</span>
		</button>
	);
};
