import { FC } from "react";
import { MenuOpenerProps } from "./menuOpener.props";
import styles from "./menuOpener.module.sass";
import cn from "classnames";

export const MenuOpener: FC<MenuOpenerProps> = ({
  className,
  onClick,
  isMenuOpen,
}) => {
  return (
    <div role="button" className={cn(className, styles.main)} onClick={onClick}>
      <div
        className={cn(styles.top, {
          [styles.top_open]: isMenuOpen,
        })}
      />
      <div>
        <div
          className={cn(styles.center, {
            [styles.center_open]: isMenuOpen,
          })}
        />
        <div
          className={cn(styles.center, {
            [styles.center_open]: isMenuOpen,
          })}
        />
      </div>
      <div
        className={cn(styles.bottom, {
          [styles.bottom_open]: isMenuOpen,
        })}
      />
    </div>
  );
};
