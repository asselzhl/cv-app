import {
  FaPhone,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaSkype,
} from "react-icons/fa6";

interface ContactsListItem {
  href: string;
  icon: JSX.Element;
  text: string;
  id: string;
}
const iconSize: number = 25;
const iconColor: string = "#009E60";

export const contactsList: ContactsListItem[] = [
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
  {
    href: "https://twitter.com/wordpress",
    icon: <FaTwitter size={iconSize} color={iconColor} />,
    text: "Twitter",
    id: "twitter",
  },
  {
    href: "https://www.facebook.com/facebook",
    icon: <FaFacebookF size={iconSize} color={iconColor} />,
    text: "Facebook",
    id: "facebook",
  },
  {
    href: "kamsolutions.pl",
    icon: <FaSkype size={iconSize} color={iconColor} />,
    text: "Skype",
    id: "skype",
  },
];
