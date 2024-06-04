import React from 'react';

const style = {
	line: `bg-[#667081] w-full h-[1px]`,
};

export const Scale = () => {
	return (
		<div>
			<div className={style.line}></div>
			<ul className='flex'>
				<li className='basis-[20%]'>Beginner</li>
				<li className='basis-[20%]'>Proficient</li>
				<li className='basis-[20%]'></li>
				<li className='basis-[20%] text-right'>Expert</li>
				<li className='basis-[20%] text-right'>Master</li>
			</ul>
		</div>
	);
};
