import { FC, PropsWithChildren } from "react";
import { Typo } from "@/components/ui";

const PageListTitle: FC<PropsWithChildren> = ({ children }) => {
  return <Typo fw="semibold">{children}</Typo>;
};

export default PageListTitle;
