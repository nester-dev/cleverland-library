import { FC, PropsWithChildren } from "react";

const SectionContainer: FC<PropsWithChildren> = ({ children }) => {
  return <section className="flex w-full flex-col gap-8">{children}</section>;
};

export default SectionContainer;
