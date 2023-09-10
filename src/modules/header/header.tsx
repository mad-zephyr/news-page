import { FC } from "react";
import styles from "./header.module.sass";
import Logo from "@/assets/images/logo.svg";
import Link from "next/link";
import { SideMenu } from "..";

const navItems = [
  { link: "/", text: "Home" },
  { link: "/new", text: "New" },
  { link: "/popular", text: "Popular" },
  { link: "/trending", text: "Trending" },
  { link: "/categories", text: "Categories" },
];

export const Header: FC = () => {
  return (
    <header className={styles.main}>
      <Link href={"/"}>
        <Logo />
      </Link>

      <nav>
        <SideMenu data={navItems} />
        <ul className={styles.linkList}>
          {navItems.map((nav) => (
            <li key={nav.link}>
              <Link href={nav.link}>{nav.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
