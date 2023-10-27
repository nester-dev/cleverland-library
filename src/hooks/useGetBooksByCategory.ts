import { useQuery } from "@tanstack/react-query";
import { BookService } from "@/services/book.service.ts";

export const useGetBooksByCategory = (id: string) => {
  return useQuery(
    ["books", "get books by category", id],
    () => BookService.getBooksByCategory(id),
    {
      enabled: !!id && id !== "all",
      select: ({ data }) =>
        data?.sort((book1, book2) => book2.rating - book1.rating),
      cacheTime: 0,
    }
  );
};
