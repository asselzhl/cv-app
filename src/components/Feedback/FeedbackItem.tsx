import React from "react";

const style = {
  text: `bg-[#EEEEEE] p-3.5 mb-5`,
  authorWrapper: `flex gap-5 items-center flex-wrap`,
  link: `text-[#009E60]`,
};

interface FeedbacksItem {
  text: string;
  photo: string;
  name: string;
  link: string;
}

interface FeedbackItemProps {
  feedback: FeedbacksItem;
}
export const FeedbackItem = ({ feedback }: FeedbackItemProps) => {
  return (
    <li>
      <p className={style.text}>{feedback.text}</p>

      <div className={style.authorWrapper}>
        <img src={feedback.photo} alt={`${feedback.name}'s photo`} />
        <span>{feedback.name},</span>
        <a className={style.link} href={feedback.link}>
          {feedback.link}
        </a>
      </div>
    </li>
  );
};
