import React from 'react';
import { Navigation } from './Navigation';
import { PhotoBox } from './PhotoBox';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { routePaths } from '../routePaths';

export const Panel = () => {
	return (
		<aside className='bg-[#222935] p-5 flex flex-col gap-y-14 w-[20%]'>
			<PhotoBox config='inner' />
			<Navigation />
			<Link to={routePaths.home}>
				<Button buttonConfig='goBack' />
			</Link>
		</aside>
	);
};
