import { FC } from "react";
import { Typo } from "@/components/ui";

interface SpecificationsRowProps {
  title: string;
  info: string | string[];
}

const SpecificationsRow: FC<SpecificationsRowProps> = ({ info, title }) => {
  const transformedInfo = Array.isArray(info) ? info.join(", ") : info;

  return (
    <div className="grid grid-cols-[130px_auto] text-xs sm:grid-cols-[130px_auto] md:text-sm lg:grid-cols-[190px_auto] lg:text-base">
      <Typo fw="semibold" color="gray-500">
        {title}
      </Typo>
      <Typo className="max-w-[445px]">{transformedInfo}</Typo>
    </div>
  );
};

export default SpecificationsRow;
