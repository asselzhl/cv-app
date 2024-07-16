import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Panel } from '../Panel';

interface ButtonProps {
	text: string;
	icon: JSX.Element;
	styleKey: string;
	onClick?: () => void;
}

interface NavigationProps {
	navList: {
		id: string;
		icon: JSX.Element;
		text: string;
	}[];
}

const navList = [
	{ id: 'about', icon: <span>home</span>, text: 'About me' },
	{ id: 'education', icon: <span>about</span>, text: 'Education' },
	{ id: 'experience', icon: <span>contacts</span>, text: 'Experience' },
];

const routePaths = {
	home: '/',
};

jest.mock('react-router-dom', () => ({
	Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
		<a href={to}>{children}</a>
	),
}));

jest.mock('../../../components/Button/Button', () => ({
	Button: ({ text, icon, onClick, styleKey }: ButtonProps) => (
		<button onClick={onClick} className={styleKey} data-testid='button'>
			{icon}
			<span>{text}</span>
		</button>
	),
}));

jest.mock('../../../components/PhotoBox/PhotoBox', () => ({
	PhotoBox: ({ config }: { config: string }) => (
		<div data-testid='photobox'>{config}</div>
	),
}));

jest.mock('../../../components/Navigation/Navigation', () => ({
	Navigation: ({ navList }: NavigationProps) => (
		<nav data-testid='navigation'>
			{navList.map((item) => (
				<div key={item.id}>{item.text}</div>
			))}
		</nav>
	),
}));

describe('Panel component', () => {
	it('renders panel with initial open state', () => {
		render(<Panel />);

		const asideElement = screen.getByRole('complementary');
		expect(asideElement).toHaveClass('relative');
	});

	it('toggles panel open and closed', () => {
		render(<Panel />);

		const toggleButton = screen.getAllByTestId('button')[0];
		const asideElement = screen.getByRole('complementary');

		expect(asideElement).toHaveClass('relative');

		fireEvent.click(toggleButton);
		expect(asideElement).toHaveClass('right-[100%]');

		fireEvent.click(toggleButton);
		expect(asideElement).toHaveClass('relative');
	});

	it('renders PhotoBox component', () => {
		render(<Panel />);

		const photoBoxElement = screen.getByTestId('photobox');
		expect(photoBoxElement).toBeInTheDocument();
		expect(photoBoxElement).toHaveTextContent('inner');
	});

	it('renders Navigation component with nav items', () => {
		render(<Panel />);

		const navigationElement = screen.getByTestId('navigation');
		expect(navigationElement).toBeInTheDocument();

		navList.forEach((item) => {
			expect(navigationElement).toHaveTextContent(item.text);
		});
	});

	it('renders "Go back" button with link', () => {
		render(<Panel />);

		const buttonElement = screen.getByText('Go back').closest('a');
		expect(buttonElement).toBeInTheDocument();
		expect(buttonElement).toHaveAttribute('href', routePaths.home);
	});
});
