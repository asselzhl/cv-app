import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Contacts } from '../Contacts';

describe('Contacts component', () => {
	const contactsList = [
		{
			href: 'tel:500342242',
			icon: <span>icon</span>,
			text: '500 342 242',
			id: 'phone',
		},
		{
			href: 'mailto:office@kamsolutions.pl',
			icon: <span>icon</span>,
			text: 'office@kamsolutions.pl',
			id: 'email',
		},
	];

	it('renders the contacts list', () => {
		render(<Contacts contactsList={contactsList} />);

		const contactsListElement = screen.getByTestId('contacts-list');
		expect(contactsListElement).toBeInTheDocument();
	});

	it('renders the correct number of contacts', () => {
		render(<Contacts contactsList={contactsList} />);

		const contactItems = screen.getAllByTestId('contact-item');
		expect(contactItems.length).toBe(contactsList.length);
	});
});
