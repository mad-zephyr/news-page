"use client";

import { FC, useState } from "react";
import { SideMenuProps } from "./sideMenu.props";
import MenuHandler from "@/assets/images/icon-menu.svg";
import cn from "classnames";
import styles from "./sideMenu.module.sass";
import Link from "next/link";
import { MenuOpener } from "@/components";

export const SideMenu: FC<SideMenuProps> = ({ data }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const sideMenuHandle = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <MenuOpener
        className={styles.opener}
        isMenuOpen={isMenuOpen}
        onClick={sideMenuHandle}
      />
      <aside
        onClick={sideMenuHandle}
        className={cn(styles.hover, {
          [styles.hover_active]: isMenuOpen,
        })}
      >
        <div
          className={cn(styles.wrapper, {
            [styles.open]: isMenuOpen,
          })}
        >
          <ul className={styles.linkList}>
            {data.map((nav) => (
              <li key={nav.link}>
                <Link href={nav.link}>{nav.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};
