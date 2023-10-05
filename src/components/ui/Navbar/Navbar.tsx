import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router";
import cn from "clsx";
import { useQuery } from "@tanstack/react-query";
import NavbarItem from "@/components/ui/Navbar/NavbarItem.tsx";
import { ReactComponent as Arrow } from "@/assets/icons/arrow.svg";
import NavbarCategories from "@/components/ui/Navbar/NavbarCategories.tsx";
import { useMainStore } from "@/store/mainStore.ts";
import { isCategoriesPath } from "@/utils/isCategoriesPath.ts";
import { BookService } from "@/services/book.service.ts";

const Navbar: FC = () => {
  const isBurgerOpen = useMainStore(state => state.isBurgerOpen);
  const { pathname } = useLocation();
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const { data } = useQuery(
    ["get categories"],
    () => BookService.getCategories(),
    { select: ({ data }) => data }
  );

  useEffect(() => {
    if (isCategoriesPath(pathname) && data) {
      setIsCategoriesOpen(true);
    } else if (isBurgerOpen) {
      setIsCategoriesOpen(false);
    }
  }, [pathname, isBurgerOpen, data]);

  return (
    <div className={cn("flex w-[255px] flex-col gap-[42px] md:w-[279px]")}>
      <NavbarItem
        title="Витрина книг"
        icon={<Arrow />}
        isOpen={isCategoriesOpen}
        setIsOpen={setIsCategoriesOpen}
        route="/"
        isLink={false}
      >
        <NavbarCategories isOpen={isCategoriesOpen} categories={data} />
      </NavbarItem>
      <NavbarItem title="Правила пользования" route="/rules" />
      <NavbarItem title="Договор оферты" route="/agreement" />
    </div>
  );
};

export default Navbar;
