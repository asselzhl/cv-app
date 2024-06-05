import {
	FaUser,
	FaGraduationCap,
	FaPen,
	FaLaptopCode,
	FaSuitcase,
	FaAddressCard,
	FaRegComment,
} from 'react-icons/fa6';

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

export const navList: NavListItem[] = [
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
