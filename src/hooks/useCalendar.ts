import { useCallback } from "react";
import { addMonths, getMonth, subMonths } from "date-fns";
import { useDateStore } from "@/store/dateStore.ts";
import { FIRST_MONTH, LAST_MONTH } from "@/shared/constants.ts";

export const useCalendar = () => {
  const [selectedMonth, selectedDay, setSelectedDay, setSelectedMonth] =
    useDateStore(state => [
      state.selectedMonth,
      state.selectedDate,
      state.setSelectedDate,
      state.setSelectedMonth,
    ]);

  const nextMonth = useCallback(() => {
    if (getMonth(selectedMonth) === LAST_MONTH) return;

    const nextMonthDate = addMonths(new Date(selectedMonth), 1);
    setSelectedMonth(nextMonthDate);
  }, [selectedMonth, setSelectedMonth]);

  const prevMonth = useCallback(() => {
    if (getMonth(selectedMonth) === FIRST_MONTH) return;

    const prevMonthDate = subMonths(new Date(selectedMonth), 1);
    setSelectedMonth(prevMonthDate);
  }, [selectedMonth, setSelectedMonth]);

  const selectMonth = useCallback(
    (month: Date) => {
      setSelectedMonth(month);
    },
    [setSelectedMonth]
  );

  const selectDay = useCallback(
    (day: Date) => {
      setSelectedDay(day);
    },
    [setSelectedDay]
  );

  const clearState = () => {
    setSelectedDay(null);
    setSelectedMonth(new Date());
  };

  return {
    selectedDay,
    selectDay,
    selectedMonth,
    selectMonth,
    nextMonth,
    prevMonth,
    clearState,
  };
};
