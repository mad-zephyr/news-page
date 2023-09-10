"use client";

import { FC } from "react";

import style from "./sideNews-item.module.sass";
import { SideNewsItemProps } from "./sideNews-item.props";
import { Ptag } from "@/components/ptag/ptag";
import { useRouter } from "next/navigation";

export const SideNewsItem: FC<SideNewsItemProps> = ({
  header,
  text,
  nav = "",
}) => {
  const { push } = useRouter();

  const clickHandler = () => {
    push(nav);
  };

  return (
    <li className={style.main}>
      <Ptag onClick={clickHandler} text={header} classNames={style.title} />
      <Ptag text={text} classNames={style.descr} />
    </li>
  );
};
