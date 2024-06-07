import React from "react";

import { photoBoxMap } from "../../helpers/photoBoxMap";

interface PhotoBoxProps {
  config: keyof typeof photoBoxMap;
}

export const PhotoBox = ({ config }: PhotoBoxProps) => {
  const { name, title, description, avatar, style } = photoBoxMap[config];
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img src={avatar} alt={`${name}'s avatar`} className={style.img} />
      </div>
      <h1 className={style.title}>{name}</h1>
      <h2 className={style.subtitle}>{title}</h2>
      {description && <p className={style.text}>{description}</p>}
    </div>
  );
};
