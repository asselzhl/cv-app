import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { stateStatus } from '../../store/constants';
import { getSkillsStateStatus } from '../../store/selectors';
import { fetchSkills } from '../../store/skills/skillsThunk';
import { useAppDispatch } from '../../store/store';

export const Skills = () => {
	const dispatch = useAppDispatch();

	const skillsStateStatus = useSelector(getSkillsStateStatus);
	useEffect(() => {
		if (skillsStateStatus === stateStatus.idle) {
			dispatch(fetchSkills());
		}
	}, [dispatch]);
	return <div>Skills</div>;
};
