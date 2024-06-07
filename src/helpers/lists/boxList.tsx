import { About } from '../../components/About/About';
import { Contacts } from '../../components/Contacts/Contacts';
import { Education } from '../../components/Education/Education';
import { Experience } from '../../components/Experience/Experience';
import { Feedback } from '../../components/Feedback/Feedback';
import { Portfolio } from '../../components/Portfolio/Portfolio';

type BoxMapKeys =
	| 'about'
	| 'education'
	| 'experience'
	| 'skills'
	| 'portfolio'
	| 'contacts'
	| 'feedbacks';

interface BoxMapValues {
	title: string;
	content: JSX.Element;
	id: BoxMapKeys;
}

export const boxList: BoxMapValues[] = [
	{
		title: 'About me',
		content: <About />,
		id: 'about',
	},
	{
		title: 'Education',
		content: <Education />,
		id: 'education',
	},
	{
		title: 'Experience',
		content: <Experience />,
		id: 'experience',
	},
	{
		title: 'Skills',
		content: <About />,
		id: 'skills',
	},
	{
		title: 'Portfolio',
		content: <Portfolio />,
		id: 'portfolio',
	},
	{
		title: 'Contacts',
		content: <Contacts />,
		id: 'contacts',
	},
	{
		title: 'Feedbacks',
		content: <Feedback />,
		id: 'feedbacks',
	},
];
