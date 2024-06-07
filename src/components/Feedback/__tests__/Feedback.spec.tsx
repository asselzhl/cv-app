import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Feedback } from '../Feedback';

describe('Feedback component', () => {
	const feedbacksList = [
		{
			text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ',
			photo: '../../../assets/expert.png',
			name: 'Martin Friman Programmer1',
			link: 'somesite.com',
		},
		{
			text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ',
			photo: '../../../assets/expert.png',
			name: 'Martin Friman Programmer2',
			link: 'somesite.com',
		},
	];

	it('renders the feedbacks list', () => {
		render(<Feedback feedbacksList={feedbacksList} />);

		const feedbacksListElement = screen.getByTestId('feedbacks-list');
		expect(feedbacksListElement).toBeInTheDocument();
	});

	it('renders the correct number of feedbacks', () => {
		render(<Feedback feedbacksList={feedbacksList} />);

		const feedbackItems = screen.getAllByTestId('feedback-item');
		expect(feedbackItems.length).toBe(feedbacksList.length);
	});
});
