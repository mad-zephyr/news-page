"use client";

import { FC } from "react";
import { ButtonProps } from "./button.props";
import styles from "./button.module.sass";

export const Button: FC<ButtonProps> = ({ text, action }) => {
  const handleClick = () => {
    action && action();
  };
  return (
    <button onClick={handleClick} className={styles.btn}>
      {text}
    </button>
  );
};
