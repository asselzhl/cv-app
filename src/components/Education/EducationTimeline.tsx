import React from 'react';
import {
	Timeline,
	TimelineItem,
	TimelineConnector,
	TimelineHeader,
	TimelineIcon,
	TimelineBody,
	Typography,
} from '@material-tailwind/react';

interface EducationItem {
	date: number;
	title: string;
	text: string;
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
					<TimelineIcon className='text-[#009E60] bg-transparent font-bold leading-none'>
						{education.date}
					</TimelineIcon>
					<Typography variant='h6'>{education.title}</Typography>
				</TimelineHeader>
				<TimelineBody className='pb-8'>
					<Typography variant='small'>{education.text}</Typography>
				</TimelineBody>
			</TimelineItem>
		</Timeline>
	);
};
