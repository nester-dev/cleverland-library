import { FC } from "react";
import cn from "clsx";
import { GridType } from "@/components/ui/GridControls/types.ts";
import { useMainStore } from "@/store/mainStore.ts";

const BookCardImage: FC<{ image?: string }> = ({ image }) => {
  const gridType = useMainStore(state => state.gridType);

  const isRow = gridType === GridType.row;

  return (
    <div
      className={cn(
        "h-[242px] w-full flex-shrink-0 overflow-hidden rounded-[10px] border border-gray-500 bg-bookBg bg-center bg-no-repeat object-cover object-center",
        isRow &&
          "h-auto min-w-[70px] max-w-[120px] !flex-shrink !object-contain"
      )}
    >
      {image && (
        <img className="h-full w-full object-contain" src={image} alt="book" />
      )}
    </div>
  );
};

export default BookCardImage;
