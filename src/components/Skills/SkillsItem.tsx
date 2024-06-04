import React from 'react';

export const SkillsItem = ({ skill }) => {
	return (
		<li className='w-full'>
			<span
				className={`bg-[#009E60] text-white py-1 px-4 inline-block`}
				style={{ width: `${skill.range}%` }}
			>
				{skill.name}
			</span>
		</li>
	);
};
