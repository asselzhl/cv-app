import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Main } from '../Main';

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

const boxList: BoxListItem[] = [
	{
		title: 'About me',
		content: <p>Box content1</p>,
		id: 'about',
	},
	{
		title: 'Education',
		content: <p>Box content2</p>,
		id: 'education',
	},
];

describe('Main component', () => {
	it('renders main wrapper', () => {
		render(<Main boxList={boxList} />);

		const mainElement = screen.getByTestId('main');
		expect(mainElement).toBeInTheDocument();
	});

	it('renders list of boxes', () => {
		render(<Main boxList={boxList} />);

		boxList.forEach((box) => {
			const boxElement = screen.getByTestId(box.id);
			expect(boxElement).toBeInTheDocument();
			expect(boxElement).toHaveTextContent(box.title);
		});
	});

	it('scroll to top button works', () => {
		render(<Main boxList={boxList} />);

		window.scrollTo = jest.fn();

		const buttonElement = screen.getByTestId('button');
		fireEvent.click(buttonElement);

		expect(window.scrollTo).toHaveBeenCalledWith({ top: 0 });
	});
});
