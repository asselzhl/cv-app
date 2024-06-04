import { render, screen } from '@testing-library/react';
import { Button } from '../Button';
import '@testing-library/jest-dom/extend-expect';

describe('Button', () => {
	it('should render', () => {
		render(<Button buttonConfig='knowMore' />);

		const element = screen.getByTestId('button');

		expect(element).toBeInTheDocument();
	});
});
