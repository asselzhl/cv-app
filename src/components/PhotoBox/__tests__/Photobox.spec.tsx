import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PhotoBox } from '../PhotoBox';

jest.mock('../../../helpers/photoBoxMap', () => ({
	photoBoxMap: {
		inner: {
			name: 'John Doe',
			title: 'Software Engineer',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			avatar: 'john-doe-avatar.jpg',
			style: {
				container: 'container-class-1',
				imgContainer: 'img-container-class-1',
				img: 'img-class-1',
				title: 'title-class-1',
				subtitle: 'subtitle-class-1',
				text: 'text-class-1',
			},
		},
	},
}));

describe('PhotoBox component', () => {
	it('renders with correct content and styles', () => {
		render(<PhotoBox config='inner' />);

		const photoBoxElement = screen.getByTestId('photobox');
		expect(photoBoxElement).toBeInTheDocument();

		const nameElement = screen.getByText('John Doe');
		expect(nameElement).toBeInTheDocument();

		const titleElement = screen.getByText('Software Engineer');
		expect(titleElement).toBeInTheDocument();

		const descriptionElement = screen.getByText(
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		);
		expect(descriptionElement).toBeInTheDocument();

		const imgElement = screen.getByAltText("John Doe's avatar");
		expect(imgElement).toBeInTheDocument();
		expect(imgElement).toHaveClass('img-class-1');
		expect(imgElement).toHaveAttribute('src', 'john-doe-avatar.jpg');
	});
});
