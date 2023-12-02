import { AppProps } from "next/app";
import { FC, PropsWithChildren } from "react";
import { AppContextProvider } from "@/context/AppContextProvider";

export const AppProvider: FC<PropsWithChildren<AppProps>> = ({ children }) => {
  return <AppContextProvider>{children}</AppContextProvider>;
};
