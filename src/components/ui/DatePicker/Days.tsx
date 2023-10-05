import { FC, useEffect } from "react";
import {
  addDays,
  addMonths,
  endOfMonth,
  getDaysInMonth,
  getISODay,
  isEqual,
  startOfMonth,
  subDays,
  subMonths,
} from "date-fns";
import Day from "@/components/ui/DatePicker/Day.tsx";
import { useCalendar } from "@/hooks/useCalendar.ts";
import {
  getDaysAvailableToBorrow,
  isDayAvailable,
} from "@/components/ui/DatePicker/helper.ts";
import { DAYS_IN_WEEK } from "@/shared/constants.ts";

const Days: FC = () => {
  const { selectedMonth, selectedDay, selectDay, clearState } = useCalendar();
  const daysInMonth = getDaysInMonth(selectedMonth);
  const firstDayDate = startOfMonth(selectedMonth);
  const previousMonth = subMonths(selectedMonth, 1);
  const lastDayDate = endOfMonth(previousMonth);
  const nextMonthFirstDay = startOfMonth(addMonths(selectedMonth, 1));
  const availableDays = getDaysAvailableToBorrow();
  const dates: Date[] = [];

  const previousMonthDates = Array.from(
    { length: getISODay(firstDayDate) - 1 },
    (_, i) => subDays(lastDayDate, i)
  );
  const currentMonthDates = Array.from({ length: daysInMonth }, (_, i) =>
    addDays(firstDayDate, i)
  );

  dates.push(...previousMonthDates.reverse(), ...currentMonthDates);

  const nextMonthDates = Array.from(
    { length: DAYS_IN_WEEK - getISODay(nextMonthFirstDay) + 1 },
    (_, i) => addDays(nextMonthFirstDay, i)
  );

  dates.push(...nextMonthDates);

  useEffect(() => {
    return () => {
      clearState();
    };
  }, []);

  const handleDateClick = (date: Date) => {
    const isAvailable = isDayAvailable(availableDays, date);
    if (isAvailable) {
      selectDay(date);
    }
  };

  return (
    <div className="flex flex-wrap">
      {dates.map(elem => (
        <Day
          key={elem.toDateString()}
          date={elem}
          isSelected={selectedDay && isEqual(selectedDay, elem)}
          onClick={() => handleDateClick(elem)}
          availableDays={availableDays}
        />
      ))}
    </div>
  );
};

export default Days;
