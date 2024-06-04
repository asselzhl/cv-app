import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Experience } from '../Experience';

describe('Experience component', () => {
	const experienceList = [
		{
			date: '2013-2014',
			info: {
				company: 'Google',
				title: 'Front-end developer / php programmer',
				description:
					'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
			},
		},
		{
			date: '2012',
			info: {
				company: 'Twitter',
				title: 'Web developer',
				description:
					'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
			},
		},
	];
	it('renders the experience list', () => {
		render(<Experience experienceList={experienceList} />);

		const experienceListElement = screen.getByTestId('experience-list');
		expect(experienceListElement).toBeInTheDocument();
	});

	it('renders the correct number of experience item', () => {
		render(<Experience experienceList={experienceList} />);

		const experienceItems = screen.getAllByTestId('experience-item');
		expect(experienceItems.length).toBe(experienceList.length);
	});
});
