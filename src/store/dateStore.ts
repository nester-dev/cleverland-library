import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { DateStore } from "@/store/types.ts";

export const useDateStore = create<DateStore>()(
  immer(set => ({
    selectedDate: null,
    selectedMonth: new Date(),
    setSelectedDate: (date: Date | null) => set({ selectedDate: date }),
    setSelectedMonth: (date: Date) => set({ selectedMonth: date }),
  }))
);
