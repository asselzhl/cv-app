import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PortfolioItem } from '../PortfolioItem';

type ProjectType = 'ui' | 'code';
interface ProjectInfo {
	title: string;
	description: string;
	link: string;
}

interface ProjectsItem {
	imgSrc: string;
	type: ProjectType;
	info: ProjectInfo;
}

describe('PortfolioItem component', () => {
	const project: ProjectsItem = {
		info: {
			title: 'Project Title',
			description: 'Project Description',
			link: 'project-link',
		},
		imgSrc: 'project-image.jpg',
		type: 'ui',
	};

	test('renders project image', () => {
		render(<PortfolioItem project={project} />);

		const imageElement = screen.getByTestId('project-img');
		expect(imageElement).toBeInTheDocument();
		expect(imageElement).toHaveAttribute('src', 'project-image.jpg');
	});
});
