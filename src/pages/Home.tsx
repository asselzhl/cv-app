import React from 'react';
import { PhotoBox } from '../components/PhotoBox/PhotoBox';
import { routePaths } from '../helpers/routePaths';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button/Button';

const style = {
	background: `home-bg w-full h-screen flex flex-col justify-center items-center gap-y-3`,
};

export const Home = () => {
	return (
		<div className={style.background}>
			<PhotoBox config='home' />
			<Link to={routePaths.inner}>
				<Button text='Know more' />
			</Link>
		</div>
	);
};
