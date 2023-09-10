import { FC } from "react";
import { PtagProps } from "./ptag.props";
import cn from "classnames";

export const Ptag: FC<PtagProps> = ({ text, onClick, classNames }) => {
  const clickHandler = () => {
    onClick && onClick();
  };
  return (
    <p onClick={clickHandler} className={cn(classNames)}>
      {text}
    </p>
  );
};
