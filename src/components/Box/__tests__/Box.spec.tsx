import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Box } from '../Box';

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

describe('Box component', () => {
	const box: BoxListItem = {
		title: 'Box Title',
		content: <p>Box Content</p>,
		id: 'about',
	};
	it('renders correctly with given props', () => {
		render(<Box box={box} />);

		const boxElement = screen.getByText('Box Content').closest('div');
		expect(boxElement).toHaveAttribute('id', 'about');

		const titleElement = screen.getByText('Box Title');
		expect(titleElement).toBeInTheDocument();

		expect(screen.getByText('Box Content')).toBeInTheDocument();
	});
});
