import React from 'react';
import { Box } from '../Box/Box';
import { Button } from '../Button/Button';

import { HashLink } from 'react-router-hash-link';
import { buttonKeys } from '../../helpers/buttonMap';

const style = {
	wrapepr: `p-10 flex flex-col gap-y-12 relative`,
};

type BoxIDs =
	| 'about'
	| 'education'
	| 'experience'
	| 'skills'
	| 'portfolio'
	| 'contacts'
	| 'feedbacks';

interface BoxListItem {
	title: string;
	content: JSX.Element;
	id: BoxIDs;
}
interface MainProps {
	boxList: BoxListItem[];
}

export const Main = ({ boxList }: MainProps) => {
	return (
		<div className={style.wrapepr} data-testid='main'>
			{boxList.map((box) => {
				return <Box key={box.id} box={box} />;
			})}
			<HashLink smooth to='#top'>
				<Button buttonConfig={buttonKeys.goToTop} />
			</HashLink>
		</div>
	);
};
