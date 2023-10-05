import { FC } from "react";
import cn from "clsx";
import { getMonth } from "date-fns";
import { ReactComponent as Arrow } from "@/assets/icons/arrow-black.svg";
import MonthSelect from "@/components/ui/DatePicker/MonthPicker/MonthSelect.tsx";
import { useCalendar } from "@/hooks/useCalendar.ts";
import { FIRST_MONTH, LAST_MONTH } from "@/shared/constants.ts";

const MonthPicker: FC = () => {
  const { nextMonth, prevMonth, selectedMonth } = useCalendar();
  return (
    <div className="flex items-center justify-between p-2">
      <MonthSelect />
      <div className="flex gap-3">
        <button type="button" onClick={prevMonth}>
          <Arrow
            className={cn(
              "h-4 w-4 fill-dark",
              getMonth(selectedMonth) === FIRST_MONTH && "fill-gray-700"
            )}
          />
        </button>
        <button type="button" onClick={nextMonth}>
          <Arrow
            className={cn(
              "h-4 w-4 rotate-180 fill-dark",
              getMonth(selectedMonth) === LAST_MONTH && "fill-gray-700"
            )}
          />
        </button>
      </div>
    </div>
  );
};

export default MonthPicker;
