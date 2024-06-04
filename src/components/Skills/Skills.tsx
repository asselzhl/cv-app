import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { stateStatus } from '../../store/constants';
import { getSkillsList, getSkillsStateStatus } from '../../store/selectors';
import { fetchSkills } from '../../store/skills/skillsThunk';
import { useAppDispatch } from '../../store/store';
import { Button } from '../Button';
import { SkillForm } from './SkillForm';
import { SkillsItem } from './SkillsItem';

export const Skills = () => {
	const dispatch = useAppDispatch();
	const skillsList = useSelector(getSkillsList);

	const [isFormHidden, setIsFormHidden] = useState<boolean>(true);

	const skillsStateStatus = useSelector(getSkillsStateStatus);
	useEffect(() => {
		if (skillsStateStatus === stateStatus.idle) {
			dispatch(fetchSkills());
		}
	}, [dispatch]);

	const toggleForm = () => {
		setIsFormHidden(!isFormHidden);
	};

	return (
		<div>
			<Button
				buttonConfig={isFormHidden ? 'openEdit' : 'closeEdit'}
				onClick={toggleForm}
			/>
			{!isFormHidden && <SkillForm />}
			<ul className='flex flex-col gap-y-1'>
				{skillsList.map((skill) => {
					return <SkillsItem key={skill.name} skill={skill} />;
				})}
			</ul>
		</div>
	);
};
