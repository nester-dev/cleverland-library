import { format } from "date-fns";
import { BookStatus } from "@/components/ui/BookCard/types.ts";
import { IBook } from "@/shared/types/book.interface.ts";

export const getBookStatus = (
  book?: IBook | null,
  myId?: number
): [BookStatus, string] => {
  if (!book?.booking?.customerId) {
    return [BookStatus.Available, "забронировать"];
  }

  if (book.booking.customerId === myId) {
    return [BookStatus.MyBorrowed, "забронирована"];
  }

  if (book.delivery && book.booking.customerId !== myId) {
    return [
      BookStatus.Borrowed,
      `занята до ${format(book.delivery.dateHandedTo, "dd.mm")}`,
    ];
  }

  return [BookStatus.Borrowed, "забронировано"];
};
