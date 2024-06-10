import React from 'react';
import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { FaAngleUp } from 'react-icons/fa6';

const style = {
	wrapper: `p-10 flex flex-col gap-y-12 relative`,
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
	const handleScrollToTop = () => {
		window.scrollTo({ top: 0 });
	};

	return (
		<main className={style.wrapper} data-testid='main'>
			{boxList.map((box) => {
				return <Box key={box.id} box={box} />;
			})}

			<Button
				text=''
				icon={<FaAngleUp color='white' />}
				onClick={handleScrollToTop}
				styleKey='positionFixed'
			/>
		</main>
	);
};
