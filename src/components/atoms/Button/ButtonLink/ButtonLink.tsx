import Link from "next/link";
import { FC, PropsWithChildren } from "react";

import { IButtonLinkProps } from "./types";
import { classButton } from "../Button/Button";

export const ButtonLink: FC<PropsWithChildren<IButtonLinkProps>> = ({
  variant = "solid",
  color = "slate",
  className = "",
  href,
  children,
}): JSX.Element => {
  return (
    <Link href={href} className={classButton({ variant, color, className })}>
      {children}
    </Link>
  );
};
