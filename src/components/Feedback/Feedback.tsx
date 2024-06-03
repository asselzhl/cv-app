import React from 'react';

import { FeedbackItem } from './FeedbackItem';
import { feedbacksList } from '../../helpers/lists/feedbacksList';

const style = {
	list: `flex flex-col gap-y-10`,
};

export const Feedback = () => {
	return (
		<ul className={style.list}>
			{feedbacksList.map((feedback) => {
				return <FeedbackItem key={feedback.name} feedback={feedback} />;
			})}
		</ul>
	);
};
