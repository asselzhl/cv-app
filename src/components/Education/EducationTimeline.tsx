import React from 'react';
import {
	Timeline,
	TimelineItem,
	TimelineConnector,
	TimelineHeader,
	TimelineIcon,
	TimelineBody,
} from '@material-tailwind/react';

const style = {
	timeline: `text-[#009E60] bg-transparent font-bold leading-none`,
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
		<Timeline>
			<TimelineItem>
				<TimelineConnector />
				<TimelineHeader className='h-3'>
					<TimelineIcon className={style.timeline}>
						{education.date}
					</TimelineIcon>
					{education.title}
				</TimelineHeader>
				<TimelineBody className='pb-8'>{education.description}</TimelineBody>
			</TimelineItem>
		</Timeline>
	);
};
