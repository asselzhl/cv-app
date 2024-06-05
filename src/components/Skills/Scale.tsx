import React from 'react';

const style = {
	line: `bg-[#667081] w-full h-[1px]`,
	list: `flex`,
	listItem: `basis-[25%]`,
};

export const Scale = () => {
	const grades = ['Beginner', 'Proficient', 'Expert', 'Master'];
	return (
		<div>
			<div className={style.line}></div>
			<ul className={style.list}>
				{grades.map((grade) => {
					return (
						<li key={grade} className={style.listItem}>
							{grade}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
