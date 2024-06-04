import React, { useEffect } from 'react';
import { EducationTimeline } from './EducationTimeline';
import { useAppDispatch } from '../../store/store';
import { fetchEducations } from '../../store/education/educationThunk';
import { useSelector } from 'react-redux';
import {
	getEducationsList,
	getEducationsStateStatus,
} from '../../store/selectors';
import { stateStatus } from '../../store/constants';
import { PiSpinnerBold } from 'react-icons/pi';

const style = {
	spinnerWrapper: `h-[30vh] flex justify-center items-center`,
	timelineWrapper: `h-[30vh] overflow-scroll`,
};

export const Education = () => {
	const dispatch = useAppDispatch();

	const educationList = useSelector(getEducationsList);
	const educationsStateStatus = useSelector(getEducationsStateStatus);

	useEffect(() => {
		if (educationsStateStatus === stateStatus.idle) {
			dispatch(fetchEducations());
		}
	}, [dispatch]);

	if (educationsStateStatus === stateStatus.loading) {
		return (
			<div className={style.spinnerWrapper}>
				<PiSpinnerBold color='#009E60' size={30} className='rotation' />
			</div>
		);
	}

	if (educationsStateStatus === stateStatus.succeeded) {
		return (
			<div className={style.timelineWrapper}>
				{educationList.map((education) => {
					return (
						<EducationTimeline key={education.title} education={education} />
					);
				})}
			</div>
		);
	}

	// TODO: if status === failed
};
