import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { stateStatus } from '../../store/constants';
import { getSkillsList, getSkillsStateStatus } from '../../store/selectors';
import { fetchSkills } from '../../store/skills/skillsThunk';
import { useAppDispatch } from '../../store/store';

import { Loading } from '../Loading/Loading';
import { Failed } from '../Failed/Failed';
import { buttonKeys } from '../../helpers/buttonMap';
import { SkillForm } from './SkillForm';
import { SkillsItem } from './SkillsItem';
import { Scale } from './Scale';
import { Button } from '../Button/Button';

const style = {
	list: `flex flex-col gap-y-1 mb-7`,
};

const responseFailedMessage =
	'Something went wrong; please review your server connection!';

export const Skills = () => {
	const dispatch = useAppDispatch();
	const skillsList = useSelector(getSkillsList);

	const [isFormHidden, setIsFormHidden] = useState<boolean>(true);

	const skillsStateStatus = useSelector(getSkillsStateStatus);

	const buttonConfig = isFormHidden
		? buttonKeys.openEdit
		: buttonKeys.closeEdit;

	useEffect(() => {
		if (skillsStateStatus === stateStatus.idle) {
			dispatch(fetchSkills());
		}
	}, [dispatch]);

	const toggleForm = () => {
		setIsFormHidden(!isFormHidden);
	};

	if (skillsStateStatus === stateStatus.loading) {
		return <Loading />;
	}

	if (skillsStateStatus === stateStatus.failed) {
		return <Failed text={responseFailedMessage} />;
	}

	return (
		<div>
			<Button buttonConfig={buttonConfig} onClick={toggleForm} />
			{!isFormHidden && <SkillForm />}

			<ul className={style.list}>
				{skillsList.map((skill) => {
					return <SkillsItem key={skill.name} skill={skill} />;
				})}
			</ul>

			<Scale />
		</div>
	);
};
