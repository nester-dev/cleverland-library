import { FC } from "react";
import cn from "clsx";
import { useMainStore } from "@/store/mainStore.ts";
import styles from "./Burger.module.scss";

const BurgerIcon: FC = () => {
  const [isBurgerOpen, setOpenBurger] = useMainStore(state => [
    state.isBurgerOpen,
    state.setOpenBurger,
  ]);

  const handleBurgerOpen = () => {
    setOpenBurger(!isBurgerOpen);
  };

  return (
    <button
      id="burger-icon"
      type="button"
      className={cn(
        "mr-6 flex h-8 w-8 flex-col justify-between px-[3px] py-1.5 lg:hidden",
        styles.burger,
        isBurgerOpen && styles.active
      )}
      onClick={handleBurgerOpen}
    >
      <span />
      <span />
      <span />
    </button>
  );
};

export default BurgerIcon;
