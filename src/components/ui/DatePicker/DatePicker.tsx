import { FC } from "react";
import DayNames from "@/components/ui/DatePicker/DayNames.tsx";
import Days from "@/components/ui/DatePicker/Days.tsx";
import MonthPicker from "@/components/ui/DatePicker/MonthPicker/MonthPicker.tsx";

const DatePicker: FC = () => {
  return (
    <div className="h-[266px] w-[256px] rounded-lg px-4 shadow">
      <MonthPicker />
      <DayNames />
      <Days />
    </div>
  );
};

export default DatePicker;
