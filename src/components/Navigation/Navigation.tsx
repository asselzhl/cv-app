import React from 'react';

const style = {
	list: `flex flex-col gap-y-10`,
	hashLink: `flex items-center justify-center sm:justify-start gap-x-7 text-gray-500 hover:text-[#009E60] duration-300`,
	span: `hidden sm:inline`,
};

type NavItemID =
	| 'about'
	| 'education'
	| 'experience'
	| 'skills'
	| 'portfolio'
	| 'contacts'
	| 'feedbacks';
interface NavListItem {
	icon: JSX.Element;
	text: string;
	id: NavItemID;
}

interface NavigationProps {
	navList: NavListItem[];
}

export const Navigation = ({ navList }: NavigationProps) => {
	return (
		<nav>
			<ul className={style.list} data-testid='nav-list'>
				{navList.map((listItem) => {
					return (
						<li key={listItem.text}>
							<a className={style.hashLink} href={`#${listItem.id}`}>
								<span data-testid='nav-icon'>{listItem.icon}</span>
								<span className={style.span}>{listItem.text}</span>
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
