import { FC } from "react";
import cn from "clsx";
import { ReactComponent as SortIcon } from "@/assets/icons/sort.svg";
import { useMainStore } from "@/store/mainStore.ts";
import { SortingType } from "@/components/ui/Sorting/types.ts";
import styles from "./Sorting.module.scss";

const Sorting: FC = () => {
  const [sortType, changeSorting] = useMainStore(state => [
    state.sorting,
    state.changeSorting,
  ]);

  const handleClick = () => {
    if (sortType === SortingType.ASC) {
      changeSorting(SortingType.DESC);
    } else {
      changeSorting(SortingType.ASC);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="mr-auto flex w-auto cursor-pointer items-center gap-2 whitespace-nowrap rounded-full px-2 py-2 text-sm text-gray-500 shadow lg:px-4"
    >
      <SortIcon
        className={cn(
          "h-4 w-4 transition-all",
          sortType === SortingType.ASC && styles.rotateIcon
        )}
      />
      <span className="hidden lg:block">По рейтингу</span>
    </button>
  );
};

export default Sorting;
