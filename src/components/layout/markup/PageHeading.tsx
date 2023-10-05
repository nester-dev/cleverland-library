import { FC, PropsWithChildren } from "react";
import { Typo } from "@/components/ui";

const PageHeading: FC<PropsWithChildren> = ({ children }) => {
  return <Typo tag="h3">{children}</Typo>;
};

export default PageHeading;
