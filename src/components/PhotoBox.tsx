import React from 'react';

import avatar from '../assets/avatar.jpg';

type PhotoBoxKeys = 'home' | 'inner';

interface PhotoBoxValues {
	name: string;
	title: string;
	description: string;
	avatar: string;
	style;
}

const photoBoxMap: Record<PhotoBoxKeys, PhotoBoxValues> = {
	home: {
		name: 'Assel Zholaushybay',
		title: 'Front-end Developer',
		description:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque',
		avatar: avatar,
		style: {
			container: `flex flex-col justify-center items-center gap-y-3 max-w-[90%] sm:max-w-[50%] text-white`,
			imgContainer: `rounded-full overflow-hidden w-[160px] h-[160px]`,
			img: `max-w-full`,
			title: `text-3xl md:text-4xl lg:text-5xl font-bold`,
			subtitle: `text-xl md:text-2xl lg:text-3xl font-semibold`,
			text: `text-center`,
		},
	},
	inner: {
		name: 'Assel Zholaushybay',
		title: '',
		description: '',
		avatar: avatar,
		style: {
			container: `flex flex-col justify-center items-center gap-y-3 text-white`,
			imgContainer: `rounded-full overflow-hidden w-[100px] h-[100px]`,
			img: `max-w-full`,
			title: `text-base md:text-lg lg:text-xl font-bold text-center`,
		},
	},
};

interface PhotoBoxProps {
	config: PhotoBoxKeys;
}

export const PhotoBox = ({ config }: PhotoBoxProps) => {
	const { name, title, description, avatar, style } = photoBoxMap[config];
	return (
		<div className={style.container}>
			<div className={style.imgContainer}>
				<img src={avatar} alt={`${name}'s avatar`} className={style.img} />
			</div>
			<h1 className={style.title}>{name}</h1>
			<h2 className={style.subtitle}>{title}</h2>
			{description && <p className={style.text}>{description}</p>}
		</div>
	);
};
