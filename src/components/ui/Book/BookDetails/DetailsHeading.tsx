import { FC, PropsWithChildren } from "react";
import { Typo } from "@/components/ui";

interface DetailsHeadingProps extends PropsWithChildren {
  title: string;
}

const DetailsHeading: FC<DetailsHeadingProps> = ({ title, children }) => {
  return (
    <div className="mb-4 flex max-w-[305px] items-center gap-2 border-b-2 border-gray-300 pb-4 lg:max-w-[350px]">
      <Typo tag="h5">{title}</Typo>
      {children}
    </div>
  );
};

export default DetailsHeading;
