import { FC, useRef } from "react";
import { BurgerIcon, BurgerMenu } from "@/components/ui";
import { useMainStore } from "@/store/mainStore.ts";
import { useClickOutside } from "@/hooks/useClickOutside.ts";

const Burger: FC = () => {
  const setOpenBurger = useMainStore(state => state.setOpenBurger);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    setOpenBurger(false);
  };

  useClickOutside<HTMLDivElement>(menuRef, handleClickOutside);

  return (
    <div ref={menuRef}>
      <BurgerIcon />
      <BurgerMenu />
    </div>
  );
};

export default Burger;
