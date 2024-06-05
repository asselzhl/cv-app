import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PhotoBox } from '../PhotoBox';
import { photoBoxMap } from '../../../helpers/photoBoxMap';

jest.mock('../../../helpers/photoBoxMap', () => ({
	photoBoxMap: {
		inner: {
			name: 'John Doe',
			title: 'Software Engineer',
			description: 'A passionate developer.',
			avatar: 'https://example.com/avatar.jpg',
			style: {
				container: 'container',
				imgContainer: 'imgContainer',
				img: 'img',
				title: 'title',
				subtitle: 'subtitle',
				text: 'text',
			},
		},
	},
}));

describe('PhotoBox component', () => {
	it('renders correctly with given config', () => {
		render(<PhotoBox config='inner' />);

		const imgElement = screen.getByRole('img');
		expect(imgElement).toHaveAttribute('src', 'https://example.com/avatar.jpg');
		expect(imgElement).toHaveAttribute('alt', "John Doe's avatar");

		const nameElement = screen.getByText('John Doe');
		expect(nameElement).toBeInTheDocument();

		const titleElement = screen.getByText('Software Engineer');
		expect(titleElement).toBeInTheDocument();

		const descriptionElement = screen.getByText('A passionate developer.');
		expect(descriptionElement).toBeInTheDocument();
	});

	it('renders correctly without description', () => {
		const configWithoutDescription = {
			name: 'Jane Doe',
			title: 'Designer',
			description: '',
			avatar: 'https://example.com/avatar2.jpg',
			style: {
				container: 'container',
				imgContainer: 'imgContainer',
				img: 'img',
				title: 'title',
				subtitle: 'subtitle',
				text: 'text',
			},
		};

		photoBoxMap['noDescription'] = configWithoutDescription;

		render(<PhotoBox config='noDescription' />);

		const imgElement = screen.getByRole('img');
		expect(imgElement).toHaveAttribute(
			'src',
			'https://example.com/avatar2.jpg'
		);
		expect(imgElement).toHaveAttribute('alt', "Jane Doe's avatar");

		const nameElement = screen.getByText('Jane Doe');
		expect(nameElement).toBeInTheDocument();

		const titleElement = screen.getByText('Designer');
		expect(titleElement).toBeInTheDocument();

		const descriptionElement = screen.queryByText('A passionate developer.');
		expect(descriptionElement).not.toBeInTheDocument();
	});
});
