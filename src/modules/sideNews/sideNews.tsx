import { FC } from "react";
import styles from "./sideNews.module.sass";
import { SideNewsItem } from "./components";
import { SideNewsItemProps } from "./components/sideNews-item/sideNews-item.props";

const sideNewsList: SideNewsItemProps[] = [
  {
    header: "Hydrogen VS Electric Cars",
    text: "Will hydrogen-fueled cars ever catch up to EVs?",
    nav: "/hydrogen",
  },
  {
    header: "The Downsides of AI Artistry",
    text: "What are the possible adverse effects of on-demand AI Image generation??",
    nav: "/hydrogen",
  },
  {
    header: "Is VC Funding Drying Up?",
    text: "Private Funding by VC firms is down 50% YOY. We take a look at what that means.",
    nav: "/hydrogen",
  },
];

export const SideNews: FC = () => {
  return (
    <div className={styles.main}>
      <h6>New</h6>
      <ul>
        {sideNewsList.map((side) => (
          <SideNewsItem
            header={side.header}
            text={side.text}
            nav={side.nav}
            key={side.header}
          />
        ))}
      </ul>
    </div>
  );
};
