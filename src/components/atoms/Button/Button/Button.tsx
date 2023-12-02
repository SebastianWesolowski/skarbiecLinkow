import classNames from "classnames";
import { FC, PropsWithChildren } from "react";

import { IButtonProps } from "../types";
import s from "../variants.module.scss";

export const classButton = ({ variant, color, className }: Omit<IButtonProps, "children">): string =>
  classNames([s.baseStyles, s["baseStyles-text"], s[`variantStyles-${variant}`], s[`colorStyles-${color}`], className]);

export const Button: FC<PropsWithChildren<IButtonProps>> = ({
  variant = "solid",
  color = "slate",
  className = "",
  children,
}): JSX.Element => {
  return <button className={classButton({ variant, color, className })}>{children}</button>;
};
