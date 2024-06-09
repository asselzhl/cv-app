import React, { useEffect } from "react";

import { fetchEducations } from "../../store/education/educationThunk";
import { useDispatch, useSelector } from "react-redux";
import {
  getEducationsList,
  getEducationsStateStatus,
} from "../../store/selectors";
import { stateStatus } from "../../store/constants";
import { Loading } from "../Loading/Loading";

import { Failed } from "../Failed/Failed";
import { EducationTimeline } from "./EducationTimeline";
import { AppDispatch } from "src/store/store";

const style = {
  wrapper: `h-[30vh] overflow-scroll flex flex-col gap-4`,
};

const responseFailedMessage =
  "Something went wrong; please review your server connection!";

export const Education = () => {
  const dispatch = useDispatch<AppDispatch>();

  const educationList = useSelector(getEducationsList);
  const educationsStateStatus = useSelector(getEducationsStateStatus);

  useEffect(() => {
    if (educationsStateStatus === stateStatus.idle) {
      dispatch(fetchEducations());
    }
  }, [dispatch]);

  if (educationsStateStatus === stateStatus.loading) {
    return <Loading />;
  }

  if (educationsStateStatus === stateStatus.failed) {
    return <Failed text={responseFailedMessage} />;
  }

  return (
    <div className={style.wrapper}>
      {educationList.map((education) => {
        return (
          <EducationTimeline key={education.title} education={education} />
        );
      })}
    </div>
  );
};
