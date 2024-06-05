import React, { useEffect } from 'react';
import { useAppDispatch } from '../../store/store';
import { fetchEducations } from '../../store/education/educationThunk';
import { useSelector } from 'react-redux';
import {
	getEducationsList,
	getEducationsStateStatus,
} from '../../store/selectors';
import { stateStatus } from '../../store/constants';
import { Loading } from '../Loading/Loading';
import { EducationSucceeded } from './EducationSucceeded';
import { Failed } from '../Failed/Failed';

const responseFailedMessage =
	'Something went wrong; please review your server connection!';

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
		return <Loading />;
	}

	if (educationsStateStatus === stateStatus.succeeded) {
		return <EducationSucceeded educationList={educationList} />;
	}

	if (educationsStateStatus === stateStatus.failed) {
		return <Failed text={responseFailedMessage} />;
	}
};
