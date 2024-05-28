import React from 'react';

import avatar from '../assets/avatar.jpg';
import { Button } from './Button';

export const PhotoBox = () => {
	return (
		<div className='home-bg w-full h-screen flex flex-col justify-center items-center gap-y-3'>
			<div className='flex flex-col justify-center items-center gap-y-3 max-w-[40%] text-white'>
				<div className='rounded-full overflow-hidden w-[160px] h-[160px]'>
					<img src={avatar} alt='' className='max-w-full' />
				</div>
				<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
					Assel Zholaushybay
				</h1>
				<h2 className='text-xl md:text-2xl lg:text-3xl font-semibold'>
					Front-end Developer
				</h2>
				<p className='text-center'>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
					commodo ligula eget dolor. Aenean massa. Cum sociis natoque{' '}
				</p>
			</div>

			<Button text='Know more' />
		</div>
	);
};
