import React from 'react';
import { ContactsItem } from './ContactsItem';

const style = {
	list: `flex flex-col gap-y-5`,
};

interface ContactsListItem {
	href: string;
	icon: JSX.Element;
	text: string;
	id: string;
}

interface ContactsProps {
	contactsList: ContactsListItem[];
}

export const Contacts = ({ contactsList }: ContactsProps) => {
	return (
		<ul className={style.list} data-testid='contacts-list'>
			{contactsList.map((contact) => {
				return <ContactsItem key={contact.id} contact={contact} />;
			})}
		</ul>
	);
};
