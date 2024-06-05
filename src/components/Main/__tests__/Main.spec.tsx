import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { HashLink } from 'react-router-hash-link';
import { Main } from '../Main';
import { Button } from '../../../components/Button/Button';

type BoxIDs =
	| 'about'
	| 'education'
	| 'experience'
	| 'skills'
	| 'portfolio'
	| 'contacts'
	| 'feedbacks';

interface BoxListItem {
	title: string;
	content: JSX.Element;
	id: BoxIDs;
}

jest.mock('react-router-hash-link', () => ({
	HashLink: jest.fn(({ children }) => <div>{children}</div>),
}));

jest.mock('.../../../components/Box/Box', () => ({
	Box: jest.fn(({ box }) => <div data-testid='box'>{box.id}</div>),
}));

jest.mock('../../../components/Button/Button', () => ({
	Button: jest.fn(({ buttonConfig }) => <button>{buttonConfig}</button>),
}));

jest.mock('../../../components/About/About', () => ({
	About: jest.fn(),
}));

const buttonKeys = { goToTop: 'goToTop' };

describe('Main component', () => {
	const boxList: BoxListItem[] = [
		{
			title: 'About me',
			content: <p>Box content</p>,
			id: 'about',
		},
	];

	it('renders correctly', () => {
		render(<Main boxList={boxList} />);

		expect(screen.getByTestId('main')).toBeInTheDocument();

		boxList.forEach((box) => {
			expect(screen.getByText(box.id)).toBeInTheDocument();
		});

		expect(HashLink).toHaveBeenCalledWith(
			expect.objectContaining({ to: '#top', smooth: true }),
			{}
		);

		expect(Button).toHaveBeenCalledWith(
			expect.objectContaining({ buttonConfig: buttonKeys.goToTop }),
			{}
		);
	});
});
