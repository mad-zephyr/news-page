"use client";

import { FC } from "react";
import { AditionaItemProps } from "./aditionalListItem.props";
import Image from "next/image";
import { Ptag } from "@/components";
import { useRouter } from "next/navigation";
import style from "./aditionalList-item.module.sass";

export const AditionalListItem: FC<AditionaItemProps> = ({ props }) => {
  const { image, nav, number, text, title } = props;
  const { push } = useRouter();

  const clickHandler = () => {
    push(nav);
  };

  return (
    <li className={style.main}>
      <picture className={style.img}>
        <Image
          // fill
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={image}
          alt="text"
        />
      </picture>
      <div className={style.wrapper}>
        <Ptag classNames={style.number} text={number || 0} />
        <Ptag classNames={style.title} text={title} onClick={clickHandler} />
        <Ptag classNames={style.descr} text={text} />
      </div>
    </li>
  );
};
