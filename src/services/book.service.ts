import { instance } from "@/api/api.interceptor.ts";
import { HttpMethod } from "@/api/methods.ts";
import { UrlConfig } from "@/api/url.config.ts";
import { IBook, ICategory } from "@/shared/types/book.interface.ts";

export const BookService = {
  async getCategories() {
    return instance<ICategory[]>({
      url: UrlConfig.CATEGORIES,
      method: HttpMethod.GET,
    });
  },

  async getAllBooks() {
    return instance<IBook[]>({
      url: UrlConfig.BOOKS,
      method: HttpMethod.GET,
    });
  },

  async getBooksByCategory(id: string) {
    return instance<IBook[]>({
      url: `${UrlConfig.CATEGORIES}/${id}`,
      method: HttpMethod.GET,
    });
  },

  async getBookById(id: string) {
    return instance<IBook>({
      url: `${UrlConfig.BOOKS}/${id}`,
      method: HttpMethod.GET,
    });
  },
};
