import project01 from '../../assets/project01.jpg';
import project02 from '../../assets/project02.png';

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

export const projectsList: ProjectsItem[] = [
	{
		imgSrc: project01,
		type: 'ui',
		info: {
			title: 'Some text1',
			description:
				'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo',
			link: 'somesite.com',
		},
	},
	{
		imgSrc: project02,
		type: 'code',
		info: {
			title: 'Some text2',
			description:
				'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo',
			link: 'somesite.com',
		},
	},
	{
		imgSrc: project01,
		type: 'ui',
		info: {
			title: 'Some text3',
			description:
				'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo',
			link: 'somesite.com',
		},
	},
	{
		imgSrc: project02,
		type: 'code',
		info: {
			title: 'Some text4',
			description:
				'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo',
			link: 'somesite.com',
		},
	},
];

export const filterKeys = [
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
