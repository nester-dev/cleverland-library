import { FC } from "react";
import { Typo } from "@/components/ui";

const DayNames: FC = () => {
  const dayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  return (
    <div className="flex">
      {dayNames.map(name => (
        <Typo
          key={name}
          className="flex h-8 w-8 items-center justify-center bg-mainGradient bg-clip-text text-xs text-transparent"
        >
          {name}
        </Typo>
      ))}
    </div>
  );
};

export default DayNames;
