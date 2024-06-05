import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { stateStatus } from '../../store/constants';
import { getSkillsList, getSkillsStateStatus } from '../../store/selectors';
import { fetchSkills } from '../../store/skills/skillsThunk';
import { useAppDispatch } from '../../store/store';

import { Loading } from '../Loading/Loading';
import { Failed } from '../Failed/Failed';
import { SkillsSucceeded } from './SkillsSucceeded';

const responseFailedMessage =
	'Something went wrong; please review your server connection!';

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

	if (skillsStateStatus === stateStatus.loading) {
		return <Loading />;
	}

	if (skillsStateStatus === stateStatus.succeeded) {
		return (
			<SkillsSucceeded
				skillsList={skillsList}
				isFormHidden={isFormHidden}
				toggleForm={toggleForm}
			/>
		);
	}

	if (skillsStateStatus === stateStatus.failed) {
		return <Failed text={responseFailedMessage} />;
	}
};
