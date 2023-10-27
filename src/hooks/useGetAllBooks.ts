import { useQuery } from "@tanstack/react-query";
import { BookService } from "@/services/book.service.ts";

export const useGetAllBooks = (id: string) => {
  return useQuery(["books", "get all books"], () => BookService.getAllBooks(), {
    select: ({ data }) =>
      data?.sort((book1, book2) => book2.rating - book1.rating),
    enabled: !id || id === "all",
    cacheTime: 0,
  });
};
