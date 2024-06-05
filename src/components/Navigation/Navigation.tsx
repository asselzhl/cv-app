import React from 'react';
import { HashLink } from 'react-router-hash-link';

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
			<ul className={style.list}>
				{navList.map((listItem) => {
					return (
						<li key={listItem.text}>
							<HashLink
								className={style.hashLink}
								smooth
								to={`#${listItem.id}`}
							>
								{listItem.icon}
								<span className={style.span}>{listItem.text}</span>
							</HashLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
