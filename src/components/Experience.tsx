import React from 'react';
import { ExperienceItem } from './ExperienceItem';

const style = {
	wrapper: `flex flex-col gap-y-8`,
};

interface ExperienceInfo {
	company: string;
	title: string;
	description: string;
}
interface ExperienceListItem {
	date: string;
	info: ExperienceInfo;
}

const experienceList: ExperienceListItem[] = [
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

export const Experience = () => {
	return (
		<div className={style.wrapper}>
			{experienceList.map((job) => {
				return <ExperienceItem job={job} />;
			})}
		</div>
	);
};
