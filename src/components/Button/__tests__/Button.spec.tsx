import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../Button';
import '@testing-library/jest-dom/extend-expect';

describe('Button Component', () => {
	it('renders with default props', () => {
		render(<Button text='Click' />);

		const buttonElement = screen.getByTestId('button');
		expect(buttonElement).toBeInTheDocument();
		expect(buttonElement).toHaveTextContent('Click');
	});

	it('renders with icon', () => {
		render(<Button text='Click' icon={<span>icon</span>} />);

		const buttonElement = screen.getByTestId('button');
		expect(buttonElement).toBeInTheDocument();
		expect(buttonElement).toHaveTextContent('Click');
		expect(buttonElement).toContainHTML('<span>icon</span>');
	});

	it('applies correct type attribute', () => {
		render(<Button text='Submit' type='submit' />);

		const buttonElement = screen.getByTestId('button');
		expect(buttonElement).toHaveAttribute('type', 'submit');
	});

	it('calls onClick when button is clicked', () => {
		const handleClick = jest.fn();
		render(<Button text='Click' onClick={handleClick} />);

		const buttonElement = screen.getByTestId('button');
		fireEvent.click(buttonElement);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
