import React from 'react';

interface AboutProps {
	text: string;
}

export const About = ({ text }: AboutProps) => {
	return (
		<div data-testid='aboutComponent'>
			<p>{text}</p>
		</div>
	);
};
