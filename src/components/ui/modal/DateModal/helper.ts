import { ModalTypes } from "@/components/ui/modal/types.ts";

export const getModalText = (type: ModalTypes) => {
  return type === ModalTypes.DATE
    ? ["Выбор даты бронирования", "Забронировать"]
    : ["Изменение даты бронирования", "Изменить дату бронирования"];
};
