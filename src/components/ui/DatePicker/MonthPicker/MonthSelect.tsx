import { FC, useEffect, useState } from "react";
import Select from "react-select";
import {
  getDefaultOption,
  getSelectOptions,
  SelectOptions,
} from "@/components/ui/DatePicker/MonthPicker/helper.ts";
import DropdownIndicator from "@/components/ui/DatePicker/MonthPicker/DropdownIndicator.tsx";
import { useCalendar } from "@/hooks/useCalendar.ts";

const MonthSelect: FC = () => {
  const { selectedMonth, selectMonth } = useCalendar();
  const months = getSelectOptions(selectedMonth);
  const defaultOption = getDefaultOption(selectedMonth);
  const [defaultValue, setDefaultValue] = useState(defaultOption);

  useEffect(() => {
    const defaultOption = getDefaultOption(selectedMonth);
    setDefaultValue(defaultOption);
  }, [selectedMonth]);

  const handleChange = (newValue: unknown) => {
    selectMonth((newValue as SelectOptions)?.date);
  };

  return (
    <Select
      classNamePrefix="select"
      options={months}
      defaultValue={defaultValue}
      isSearchable={false}
      components={{ DropdownIndicator }}
      onChange={handleChange}
      value={defaultValue}
    />
  );
};

export default MonthSelect;
