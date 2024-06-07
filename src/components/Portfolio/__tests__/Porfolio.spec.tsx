import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Portfolio } from '../Portfolio';
import { ProjectsItem } from '../../../helpers/lists/projectsList';

jest.mock('../PortfolioItem', () => ({
	PortfolioItem: jest.fn(({ project }) => (
		<li className={`filter-item ${project.type}`}>
			<div data-testid='portfolio-info'>{project.info.title}</div>
			<img src={project.imgSrc} alt={project.info.title} />
		</li>
	)),
}));

jest.mock('../PortfolioInfo', () => ({
	PortfolioInfo: jest.fn(({ info }) => (
		<div>
			<div data-testid='portfolio-info-title'>{info.title}</div>
			<p>{info.description}</p>
			<a href={info.link} data-testid='portfolio-info-link'>
				View source
			</a>
		</div>
	)),
}));

const projectsList: ProjectsItem[] = [
	{
		info: { title: 'Project 1', description: 'Description 1', link: 'link1' },
		imgSrc: 'img1.jpg',
		type: 'ui',
	},
	{
		info: { title: 'Project 2', description: 'Description 2', link: 'link2' },
		imgSrc: 'img2.jpg',
		type: 'code',
	},
];

const filterKeys = [
	{ key: 'key1', tag: 'Tag 1' },
	{ key: 'key2', tag: 'Tag 2' },
];

describe('Portfolio component', () => {
	it('renders portfolio with projects and filter keys', () => {
		render(<Portfolio projectsList={projectsList} filterKeys={filterKeys} />);

		const filterKey = screen.getByText('Tag 1');
		expect(filterKey).toBeInTheDocument();

		const projectsListElement = screen.getByTestId('projects-list');
		expect(projectsListElement).toBeInTheDocument();

		projectsList.forEach((project) => {
			expect(screen.getByText(project.info.title)).toBeInTheDocument();
		});
	});

	it('renders PortfolioItem component with correct props', () => {
		render(<Portfolio projectsList={projectsList} filterKeys={filterKeys} />);

		expect(screen.getByText('Project 1')).toBeInTheDocument();
		expect(screen.getByText('Project 2')).toBeInTheDocument();
	});
});
