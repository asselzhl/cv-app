import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Contacts } from "../Contacts";

import { FaPhone, FaEnvelope } from "react-icons/fa6";

const iconSize: number = 25;
const iconColor: string = "#009E60";

describe("Contacts component", () => {
  const contactsList = [
    {
      href: "tel:500342242",
      icon: <FaPhone size={iconSize} color={iconColor} />,
      text: "500 342 242",
      id: "phone",
    },
    {
      href: "mailto:office@kamsolutions.pl",
      icon: <FaEnvelope size={iconSize} color={iconColor} />,
      text: "office@kamsolutions.pl",
      id: "email",
    },
  ];

  it("renders the contacts list", () => {
    render(<Contacts contactsList={contactsList} />);

    const contactsListElement = screen.getByTestId("contacts-list");
    expect(contactsListElement).toBeInTheDocument();
  });

  it("renders the correct number of contacts", () => {
    render(<Contacts contactsList={contactsList} />);

    const contactItems = screen.getAllByTestId("contact-item");
    expect(contactItems.length).toBe(contactsList.length);
  });
});
