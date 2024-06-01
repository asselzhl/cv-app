import React from 'react';
import { HashLink } from 'react-router-hash-link';

import {
	FaUser,
	FaGraduationCap,
	FaPen,
	FaLaptopCode,
	FaSuitcase,
	FaAddressCard,
	FaRegComment,
} from 'react-icons/fa6';

const style = {
	list: `flex flex-col gap-y-10`,
	hashLink: `flex items-center gap-x-7 text-gray-500 hover:text-[#009E60] duration-300`,
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

const navList: NavListItem[] = [
	{
		icon: <FaUser />,
		text: 'About me',
		id: 'about',
	},
	{
		icon: <FaGraduationCap />,
		text: 'Education',
		id: 'education',
	},
	{
		icon: <FaPen />,
		text: 'Experience',
		id: 'experience',
	},
	{
		icon: <FaLaptopCode />,
		text: 'Skills',
		id: 'skills',
	},
	{
		icon: <FaSuitcase />,
		text: 'Portfolio',
		id: 'portfolio',
	},
	{
		icon: <FaAddressCard />,
		text: 'Contacts',
		id: 'contacts',
	},
	{
		icon: <FaRegComment />,
		text: 'Feedbacks',
		id: 'feedbacks',
	},
];

export const Navigation = () => {
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
								<span>{listItem.text}</span>
							</HashLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
