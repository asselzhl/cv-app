import React from 'react';
import { EducationTimeline } from './EducationTimeline';

const style = {
	wrapper: `h-[30vh] overflow-scroll`,
};
interface EducationsListItem {
	date: number;
	title: string;
	description: string;
}

interface EducationSucceededProps {
	educationList: EducationsListItem[];
}

export const EducationSucceeded = ({
	educationList,
}: EducationSucceededProps) => {
	return (
		<div className={style.wrapper}>
			{educationList.map((education) => {
				return (
					<EducationTimeline key={education.title} education={education} />
				);
			})}
		</div>
	);
};
