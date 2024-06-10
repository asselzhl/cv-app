import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Navigation } from '../Navigation';

type NavItemID =
	| 'about'
	| 'education'
	| 'experience'
	| 'skills'
	| 'portfolio'
	| 'contacts'
	| 'feedbacks';
interface NavListItem {
	icon: JSX.Element;
	text: string;
	id: NavItemID;
}

const navList: NavListItem[] = [
	{ id: 'about', text: 'Section 1', icon: <span>about</span> },
	{ id: 'education', text: 'Section 2', icon: <span>education</span> },
];

describe('Navigation component', () => {
	it('renders navigation list', () => {
		render(<Navigation navList={navList} />);

		const navListElement = screen.getByTestId('nav-list');
		expect(navListElement).toBeInTheDocument();
	});

	it('renders correct number of nav items', () => {
		render(<Navigation navList={navList} />);

		const navItems = screen.getAllByTestId('list-item');
		expect(navItems.length).toBe(navList.length);
	});

	it('renders nav items with correct text', () => {
		render(<Navigation navList={navList} />);

		navList.forEach((item) => {
			const textElement = screen.getByText(item.text);
			expect(textElement).toBeInTheDocument();
		});
	});
});
