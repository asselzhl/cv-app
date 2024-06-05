import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Loading } from '../Loading';

describe('Loading component', () => {
	it('renders correctly', () => {
		render(<Loading />);

		const spinnerElement = screen.getByTestId('spinner');
		expect(spinnerElement).toBeInTheDocument();
	});
});
