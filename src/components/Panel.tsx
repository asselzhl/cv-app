import React, { useState } from 'react';
import { Navigation } from './Navigation';
import { PhotoBox } from './PhotoBox';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { routePaths } from '../routePaths';

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
		<aside className={isPanelOpen ? style.asideClosed : style.asideOpen}>
			<Button buttonConfig='togglePanel' onClick={togglePanel} />
			<PhotoBox config='inner' />
			<Navigation />
			<Link to={routePaths.home}>
				<Button buttonConfig='goBack' />
			</Link>
		</aside>
	);
};
