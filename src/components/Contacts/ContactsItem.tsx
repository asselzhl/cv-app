import React from 'react';

const style = {
	link: `flex items-center gap-x-5 font-bold`,
};

interface ContactsListItem {
	href: string;
	icon: JSX.Element;
	text: string;
	id: string;
}

interface ContactsItemProps {
	contact: ContactsListItem;
}

export const ContactsItem = ({ contact }: ContactsItemProps) => {
	return (
		<li data-testid='contact-item'>
			<a href={contact.href} className={style.link}>
				{contact.icon}
				{contact.text}
			</a>
		</li>
	);
};
