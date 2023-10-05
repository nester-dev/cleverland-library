/* eslint-disable import/no-duplicates */
import { format, getYear, setMonth, startOfYear } from "date-fns";
import { ru } from "date-fns/locale";

export interface SelectOptions {
  value: number;
  label: string;
  date: Date;
}

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getDefaultOption = (date: Date | null) => {
  if (!date) return [];
  const defaultMonth = format(date, "LLLL", { locale: ru });
  return {
    value: 12,
    label: `${capitalize(defaultMonth)} ${getYear(date)}`,
  };
};

export const getSelectOptions = (date: Date | null) => {
  if (!date) return [];

  const months: SelectOptions[] = [];
  const currentDate = startOfYear(date);
  const currentYear = getYear(currentDate);

  for (let i = 0; i < 12; i++) {
    const month = setMonth(currentDate, i);
    const formattedMonth = format(month, "LLLL", { locale: ru });
    const capitalizedMonth = capitalize(formattedMonth);
    months.push({
      value: i,
      label: `${capitalizedMonth} ${currentYear}`,
      date: month,
    });
  }
  return months;
};
