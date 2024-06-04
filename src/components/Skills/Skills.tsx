import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { stateStatus } from "../../store/constants";
import { getSkillsList, getSkillsStateStatus } from "../../store/selectors";
import { fetchSkills } from "../../store/skills/skillsThunk";
import { useAppDispatch } from "../../store/store";
import { Button } from "../Button";
import { SkillForm } from "./SkillForm";
import { SkillsItem } from "./SkillsItem";
import { Scale } from "./Scale";

import { PiSpinnerBold } from "react-icons/pi";

const style = {
  spinnerWrapper: `h-[30vh] flex justify-center items-center`,
};

export const Skills = () => {
  const dispatch = useAppDispatch();
  const skillsList = useSelector(getSkillsList);

  const [isFormHidden, setIsFormHidden] = useState<boolean>(true);

  const skillsStateStatus = useSelector(getSkillsStateStatus);
  useEffect(() => {
    if (skillsStateStatus === stateStatus.idle) {
      dispatch(fetchSkills());
    }
  }, [dispatch]);

  const toggleForm = () => {
    setIsFormHidden(!isFormHidden);
  };

  if (skillsStateStatus === stateStatus.loading) {
    return (
      <div className={style.spinnerWrapper}>
        <PiSpinnerBold color="#009E60" size={30} className="rotation" />
      </div>
    );
  }

  if (skillsStateStatus === stateStatus.succeeded) {
    return (
      <div>
        <Button
          buttonConfig={isFormHidden ? "openEdit" : "closeEdit"}
          onClick={toggleForm}
        />
        {!isFormHidden && <SkillForm />}
        <ul className="flex flex-col gap-y-1 mb-7">
          {skillsList.map((skill) => {
            return <SkillsItem key={skill.name} skill={skill} />;
          })}
        </ul>
        <Scale />
      </div>
    );
  }

  if (skillsStateStatus === stateStatus.failed) {
    return (
      <div className={style.spinnerWrapper}>
        <p className="text-red-500">
          Something went wrong; please review your server connection!
        </p>
      </div>
    );
  }
};
