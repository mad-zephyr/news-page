import { FC } from "react";
import styles from "./aditionalList.module.sass";
import { AditionalListItem } from "./components";
import { AditionalNewsProps } from "./components/aditionalList-item/aditionalListItem.props";

import img3 from "@/assets/images/image-gaming-growth.jpg";
import img1 from "@/assets/images/image-retro-pcs.jpg";
import img2 from "@/assets/images/image-top-laptops.jpg";

const list: AditionalNewsProps[] = [
  {
    image: img1,
    nav: "/",
    text: "What happens when old PCs are given modern upgrades?",
    title: "Reviving Retro PCs",
  },
  {
    image: img2,
    nav: "/",
    title: "Top 10 Laptops of 2022",
    text: "Our best picks for various needs and budgets",
  },
  {
    image: img3,
    nav: "/",
    title: "The Growth of Gaming",
    text: "How the pandemic has sparked fresh opportunities.",
  },
];

export const AditionalList: FC = () => {
  return (
    <section className={styles.main}>
      <ul className={styles.list}>
        {list.map((item, index) => (
          <AditionalListItem
            props={{ ...item, number: index + 1 }}
            key={item.text}
          />
        ))}
      </ul>
    </section>
  );
};
