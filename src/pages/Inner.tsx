import React from 'react';
import { Main } from '../components/Main/Main';
import { Panel } from '../components/Panel/Panel';
import { boxList } from '../helpers/lists/boxList';

const style = {
	wrapper: `flex`,
};

export const Inner = () => {
	return (
		<div className={style.wrapper}>
			<Panel />
			<Main boxList={boxList} />
		</div>
	);
};
