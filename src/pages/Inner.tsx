import React from 'react';
import { Main } from '../components/Main';
import { Panel } from '../components/Panel';

export const Inner = () => {
	return (
		<div className='flex'>
			<Panel />
			<Main />
		</div>
	);
};
