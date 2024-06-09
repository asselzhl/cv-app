import React from 'react';

const style = {
	timeline: `flex gap-7`,
	dateWrapper: `flex flex-col justify-center items-center`,
	date: `font-bold pb-4`,
	line: `h-full w-[5px] bg-[#009E60]`,
	title: `font-bold mb-1`,
	infoWrapper: `bg-[#EEEEEE] p-4`,
};

interface EducationItem {
	date: number;
	title: string;
	description: string;
}
interface EducationItemProps {
	education: EducationItem;
}

export const EducationTimeline = ({ education }: EducationItemProps) => {
	return (
		<div className={style.timeline}>
			<div className={style.dateWrapper}>
				<h5 className={style.date}>{education.date}</h5>
				<div className={style.line}></div>
			</div>

			<div className={style.infoWrapper}>
				<h4 className={style.title}>{education.title}</h4>
				<p>{education.description}</p>
			</div>
		</div>
	);
};
