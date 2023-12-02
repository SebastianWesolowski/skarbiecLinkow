import { FC, PropsWithChildren } from "react";
import { Footer, Header } from "@molecules";

export const BasicLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
