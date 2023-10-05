import { FC, PropsWithChildren } from "react";

const PageList: FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};

export default PageList;
