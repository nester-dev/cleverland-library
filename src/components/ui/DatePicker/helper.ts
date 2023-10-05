import {
  addDays,
  isEqual,
  isFriday,
  isWeekend,
  nextMonday,
  startOfDay,
} from "date-fns";

export const getDaysAvailableToBorrow = () => {
  const today = startOfDay(new Date());

  if (isWeekend(today)) {
    return [nextMonday(today)];
  }

  if (isFriday(today)) {
    return [today, nextMonday(today)];
  }

  return [today, addDays(today, 1)];
};

export const isDayAvailable = (availableDays: Date[], day: Date) => {
  return availableDays.some(elem => isEqual(elem, day));
};
