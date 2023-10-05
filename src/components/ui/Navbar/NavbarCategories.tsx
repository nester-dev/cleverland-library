import { FC, useRef } from "react";
import { NavLink } from "react-router-dom";
import cn from "clsx";
import { allBooksCategory } from "@/data";
import { Typo } from "@/components/ui";
import { Routes } from "@/shared/constants.ts";
import { ICategory } from "@/shared/types/book.interface.ts";

interface NavbarCategoriesProps {
  isOpen: boolean;
  categories?: ICategory[];
}

const NavbarCategories: FC<NavbarCategoriesProps> = ({
  isOpen,
  categories,
}) => {
  const categoriesRef = useRef<HTMLUListElement>(null);

  return (
    <ul
      className={cn(
        "flex flex-col gap-4 overflow-hidden pl-5 transition-all",
        isOpen && "mt-4"
      )}
      ref={categoriesRef}
      style={
        isOpen
          ? {
              height: `${Number(categoriesRef?.current?.scrollHeight)}px`,
            }
          : { height: "0" }
      }
    >
      {categories?.length &&
        [allBooksCategory, ...categories].map(category => (
          <NavLink
            key={category.id}
            to={
              category.id === "all" ? Routes.HOME : `/category/${category.path}`
            }
            state={category}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-1.5",
                isActive && "bg-mainGradient bg-clip-text text-transparent"
              )
            }
          >
            <Typo variant="titleLarge">
              {category.name}
              {Number(category.booksCount) >= 0 ? (
                <span className="pl-2.5 text-sm leading-6 text-gray-500">
                  {category.booksCount}
                </span>
              ) : null}
            </Typo>
          </NavLink>
        ))}
    </ul>
  );
};
export default NavbarCategories;
