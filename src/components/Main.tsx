import React from "react";
import { Box } from "./Box";
import { Button } from "./Button";

import { HashLink } from "react-router-hash-link";
import { boxList } from "../helpers/lists/boxList";

const style = {
  wrapepr: `p-10 flex flex-col gap-y-12 relative`,
};

export const Main = () => {
  return (
    <div className={style.wrapepr}>
      {boxList.map((box) => {
        return <Box key={box.id} box={box} />;
      })}
      <HashLink smooth to="#top">
        <Button buttonConfig="goToTop" />
      </HashLink>
    </div>
  );
};
