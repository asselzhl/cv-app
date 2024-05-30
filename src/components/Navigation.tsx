import React from "react";
import { HashLink } from "react-router-hash-link";

import {
  FaUser,
  FaGraduationCap,
  FaPen,
  FaLaptopCode,
  FaSuitcase,
  FaAddressCard,
  FaRegComment,
} from "react-icons/fa6";

type NavItemID =
  | "about"
  | "education"
  | "experience"
  | "skills"
  | "portfolio"
  | "contacts"
  | "feedbacks";
interface NavListItem {
  icon: JSX.Element;
  text: string;
  id: NavItemID;
}

const navList: NavListItem[] = [
  {
    icon: <FaUser />,
    text: "About me",
    id: "about",
  },
  {
    icon: <FaGraduationCap />,
    text: "Education",
    id: "education",
  },
  {
    icon: <FaPen />,
    text: "Experience",
    id: "experience",
  },
  {
    icon: <FaLaptopCode />,
    text: "Skills",
    id: "skills",
  },
  {
    icon: <FaSuitcase />,
    text: "Portfolio",
    id: "portfolio",
  },
  {
    icon: <FaAddressCard />,
    text: "Contacts",
    id: "contacts",
  },
  {
    icon: <FaRegComment />,
    text: "Feedbacks",
    id: "feedbacks",
  },
];

export const Navigation = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-y-10">
        {navList.map((listItem) => {
          return (
            <li
              key={listItem.text}
              className="flex items-center gap-x-5 text-gray-500"
            >
              <HashLink smooth to={`#${listItem.id}`}>
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
