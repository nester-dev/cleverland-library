import { useMemo } from "react";
import { SortingType } from "@/components/ui/Sorting/types.ts";
import { IBook } from "@/shared/types/book.interface.ts";

export const useSortBooks = () => {
  return useMemo(() => {
    return (type: SortingType, books: IBook[]) => {
      const sortedBooks = [...books];
      sortedBooks.sort((book1, book2) =>
        type === SortingType.DESC
          ? book2.rating - book1.rating
          : book1.rating - book2.rating
      );
      return sortedBooks;
    };
  }, []);
};
