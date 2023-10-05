import { FC, PropsWithChildren, ReactNode } from "react";

interface DetailsItemProps extends PropsWithChildren {
  heading: ReactNode;
}

const DetailsItem: FC<DetailsItemProps> = ({ heading, children }) => {
  return (
    <div>
      {heading}
      {children}
    </div>
  );
};

export default DetailsItem;
