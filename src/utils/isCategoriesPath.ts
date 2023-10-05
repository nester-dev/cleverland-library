import { Routes } from "@/shared/constants.ts";

export const isCategoriesPath = (pathname: string) => {
  return pathname === Routes.HOME || pathname.includes(Routes.CATEGORY);
};
