import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Portfolio } from '../Portfolio';
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

const projectsList: ProjectsItem[] = [
	{
		imgSrc: '../../assets/project02.png',
		type: 'ui',
		info: {
			title: 'Some text1',
			description:
				'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo',
			link: 'somesite.com',
		},
	},
];

const filterKeys = [
	{
		key: '*',
		tag: 'All',
	},
	{
		key: 'code',
		tag: 'Code',
	},
	{
		key: 'ui',
		tag: 'UI',
	},
];

describe('Portfolio component', () => {
	it('renders correctly with projects and filter keys', () => {
		render(<Portfolio projectsList={projectsList} filterKeys={filterKeys} />);

		filterKeys.forEach((filterKey) => {
			expect(screen.getByText(filterKey.tag)).toBeInTheDocument();
		});

		projectsList.forEach((project) => {
			expect(screen.getByText(project.info.title)).toBeInTheDocument();
			expect(screen.getByText(project.info.description)).toBeInTheDocument();
			expect(screen.getByText(project.type)).toBeInTheDocument();
			expect(screen.getByText(project.info.link)).toBeInTheDocument();
			expect(PortfolioItem).toHaveBeenCalledWith({ project }, {});
		});
	});
});
