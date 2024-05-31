import React from "react";

import expert from "../assets/expert.png";
import { FeedbackItem } from "./FeedbackItem";

const style = {
  list: `flex flex-col gap-y-10`,
};

interface FeedbacksItem {
  text: string;
  photo: string;
  name: string;
  link: string;
}

const feedbacksList: FeedbacksItem[] = [
  {
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ",
    photo: expert,
    name: "Martin Friman Programmer",
    link: "somesite.com",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ",
    photo: expert,
    name: "Martin Friman Programmer",
    link: "somesite.com",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ",
    photo: expert,
    name: "Martin Friman Programmer",
    link: "somesite.com",
  },
];

export const Feedback = () => {
  return (
    <ul className={style.list}>
      {feedbacksList.map((feedback) => {
        return <FeedbackItem feedback={feedback} />;
      })}
    </ul>
  );
};
