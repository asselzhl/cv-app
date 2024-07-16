import React from 'react';

const style = {
	span: `bg-[#009E60] text-white py-1 px-4 inline-block`,
};
interface SkillsListItem {
	name: string;
	range: number;
}
interface SkillsItemProps {
	skill: SkillsListItem;
}

export const SkillsItem = ({ skill }: SkillsItemProps) => {
	return (
		<li className='w-full'>
			<span className={style.span} style={{ width: `${skill.range}%` }}>
				{skill.name}
			</span>
		</li>
	);
};
