import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Failed } from '../Failed';

describe('Failed component', () => {
	const text = 'Error message';
	it('renders correctly with given text', () => {
		render(<Failed text={text} />);

		const textElement = screen.getByText(text);
		expect(textElement).toBeInTheDocument();
	});
});
