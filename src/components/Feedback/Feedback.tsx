import React from "react";

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

interface FeedbackProps {
  feedbacksList: FeedbacksItem[];
}

export const Feedback = ({ feedbacksList }: FeedbackProps) => {
  return (
    <ul className={style.list} data-testid="feedbacks-list">
      {feedbacksList.map((feedback) => {
        return <FeedbackItem key={feedback.name} feedback={feedback} />;
      })}
    </ul>
  );
};
