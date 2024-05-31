import React from 'react';
const style = {
	wrapper: `flex`,
	leftCol: `w-[20%]`,
	rightCol: `w-[80%]`,
	title: `font-bold mb-2`,
	date: `text-[#667081]`,
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
interface ExperienceItemProps {
	job: ExperienceListItem;
}

export const ExperienceItem = ({ job }: ExperienceItemProps) => {
	return (
		<div className={style.wrapper}>
			<div className={style.leftCol}>
				<h4 className={style.title}>{job.info.company}</h4>
				<h5 className={style.date}>{job.date}</h5>
			</div>

			<div className={style.rightCol}>
				<h4 className={style.title}>{job.info.title}</h4>
				<p>{job.info.description}</p>
			</div>
		</div>
	);
};
