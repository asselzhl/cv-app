import React, { useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { PhotoBox } from '../PhotoBox/PhotoBox';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import { routePaths } from '../../helpers/routePaths';
import { navList } from '../../helpers/lists/navList';
import { FaAngleLeft, FaBars } from 'react-icons/fa6';

const style = {
	asideClosed: `bg-[#222935] p-7 flex flex-col gap-y-14 absolute right-[100%]`,
	asideOpen: `bg-[#222935] p-5 sm:p-7 flex flex-col gap-y-14 relative`,
};

export const Panel = () => {
	const [isPanelOpen, setIsPanelOpen] = useState(false);

	const togglePanel = () => {
		setIsPanelOpen(!isPanelOpen);
	};
	return (
		<aside
			className={isPanelOpen ? style.asideClosed : style.asideOpen}
			role='complementary'
		>
			<Button
				text=''
				icon={<FaBars color='white' />}
				onClick={togglePanel}
				styleKey='positionAbsolute'
			/>
			<PhotoBox config='inner' />
			<Navigation navList={navList} />
			<Link to={routePaths.home}>
				<Button text='Go back' icon={<FaAngleLeft />} styleKey='hiddenSpan' />
			</Link>
		</aside>
	);
};
