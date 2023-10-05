import { useQuery } from "@tanstack/react-query";
import { BookService } from "@/services/book.service.ts";

export const useGetAllBooks = () => {
  return useQuery(["books", "get all books"], () => BookService.getAllBooks(), {
    select: ({ data }) =>
      data.sort((book1, book2) => book2.rating - book1.rating),
  });
};
