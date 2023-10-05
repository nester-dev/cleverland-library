import { FC, useEffect } from "react";
import cn from "clsx";
import { useLocation } from "react-router";
import { Navbar } from "@/components/ui";
import { useMainStore } from "@/store/mainStore.ts";
import { hideDocumentScroll } from "@/utils/hideScroll.ts";
import UserMenuButtons from "@/components/ui/UserMenu/UserMenuButtons.tsx";

const BurgerMenu: FC = () => {
  const location = useLocation();
  const [isBurgerOpen, setOpenBurger] = useMainStore(state => [
    state.isBurgerOpen,
    state.setOpenBurger,
  ]);

  useEffect(() => {
    hideDocumentScroll(isBurgerOpen);

    return () => {
      hideDocumentScroll(false);
    };
  }, [isBurgerOpen]);

  useEffect(() => {
    setOpenBurger(false);
  }, [location.pathname, setOpenBurger]);

  return (
    <div
      className={cn(
        "pointer-events-none absolute -left-full top-full z-10 w-full max-w-[502px] rounded-[10px] bg-gray-400 px-4 pb-[52px] pt-8 opacity-0 transition-all duration-500 md:px-8",
        isBurgerOpen &&
          "pointer-events-auto !visible left-0 !block max-h-[80vh] overflow-auto opacity-100"
      )}
    >
      <Navbar />

      <div className="mt-[52px] flex flex-col items-start gap-[42px] border-t border-gray-700 pt-8 text-lg font-bold">
        <UserMenuButtons />
      </div>
    </div>
  );
};

export default BurgerMenu;
