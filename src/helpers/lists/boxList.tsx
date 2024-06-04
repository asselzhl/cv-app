import { Skills } from "../../components/Skills/Skills";
import { About } from "../../components/About/About";
import { Contacts } from "../../components/Contacts/Contacts";
import { Education } from "../../components/Education/Education";
import { Experience } from "../../components/Experience/Experience";
import { Feedback } from "../../components/Feedback/Feedback";
import { Portfolio } from "../../components/Portfolio/Portfolio";
import { contactsList } from "./contactsList";
import { experienceList } from "./experienceList";
import { feedbacksList } from "./feedbacksList";

type BoxMapKeys =
  | "about"
  | "education"
  | "experience"
  | "skills"
  | "portfolio"
  | "contacts"
  | "feedbacks";

interface BoxMapValues {
  title: string;
  content: JSX.Element;
  id: BoxMapKeys;
}

const aboutText =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque";

export const boxList: BoxMapValues[] = [
  {
    title: "About me",
    content: <About text={aboutText} />,
    id: "about",
  },
  {
    title: "Education",
    content: <Education />,
    id: "education",
  },
  {
    title: "Experience",
    content: <Experience experienceList={experienceList} />,
    id: "experience",
  },
  {
    title: "Skills",
    content: <Skills />,
    id: "skills",
  },
  {
    title: "Portfolio",
    content: <Portfolio />,
    id: "portfolio",
  },
  {
    title: "Contacts",
    content: <Contacts contactsList={contactsList} />,
    id: "contacts",
  },
  {
    title: "Feedbacks",
    content: <Feedback feedbacksList={feedbacksList} />,
    id: "feedbacks",
  },
];
