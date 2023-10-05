import { Routes } from "@/shared/constants.ts";
import { allBooksCategory } from "@/data";
import { ICategory } from "@/shared/types/book.interface.ts";

export const getBookPageUrl = (
  pathname: string,
  state: ICategory,
  id: number
): [string, ICategory] => {
  return pathname === Routes.HOME
    ? [`${Routes.CATEGORY}/all/${id}`, allBooksCategory]
    : [`${pathname}/${id}`, state];
};
