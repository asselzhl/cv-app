import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../Button';
import '@testing-library/jest-dom/extend-expect';

const buttonConfig = 'knowMore';
const handleClick = jest.fn();

describe('Button Component', () => {
	it('renders button with correct text', () => {
		render(<Button buttonConfig={buttonConfig} />);

		const buttonElement = screen.getByTestId('button');
		const spanElement = screen.getByText('know more');

		expect(buttonElement).toBeInTheDocument();
		expect(spanElement).toBeInTheDocument();
	});

	it('calls onClick when button is clicked', () => {
		render(<Button buttonConfig={buttonConfig} onClick={handleClick} />);

		const buttonElement = screen.getByTestId('button');
		fireEvent.click(buttonElement);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
