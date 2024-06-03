import React from "react";
import { ContactsItem } from "./ContactsItem";
import { contactsList } from "../../helpers/lists/contactsList";

const style = {
  list: `flex flex-col gap-y-5`,
};

export const Contacts = () => {
  return (
    <ul className={style.list}>
      {contactsList.map((contact) => {
        return <ContactsItem key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};
