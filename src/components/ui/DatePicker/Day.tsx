import { FC } from "react";
import { getDate, isToday, isWeekend } from "date-fns";
import cn from "clsx";
import { isDayAvailable } from "@/components/ui/DatePicker/helper.ts";

interface Props {
  date: Date;
  isSelected?: boolean | null;
  onClick?: () => void;
  availableDays: Date[];
}

const Day: FC<Props> = ({ date, isSelected, onClick, availableDays }) => {
  const isAvailable = isDayAvailable(availableDays, date);

  return (
    <button
      type="button"
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-medium text-gray-700",
        isToday(date) &&
          !isSelected &&
          "bg-mainGradient bg-clip-text text-xs font-medium !text-transparent",
        isSelected && "!bg-mainGradient !text-white",
        isWeekend(date) && "!bg-negative",
        isAvailable && !isToday(date) && "!text-dark"
      )}
      onClick={onClick}
    >
      {getDate(date)}
    </button>
  );
};

export default Day;
