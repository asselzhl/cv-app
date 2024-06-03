interface ExperienceInfo {
	company: string;
	title: string;
	description: string;
}
interface ExperienceListItem {
	date: string;
	info: ExperienceInfo;
}

export const experienceList: ExperienceListItem[] = [
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
