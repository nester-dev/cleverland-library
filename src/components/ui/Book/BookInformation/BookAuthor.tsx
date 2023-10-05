import { FC } from "react";
import cn from "clsx";
import { Typo } from "@/components/ui";
import { GridType } from "@/components/ui/GridControls/types.ts";
import { useMainStore } from "@/store/mainStore.ts";

interface BookAuthorProps {
  authors?: string[];
  variant?: "normal" | "big";
}

const BookAuthor: FC<BookAuthorProps> = ({ authors, variant = "normal" }) => {
  const gridType = useMainStore(state => state.gridType);

  const isRow = gridType === GridType.row;
  return (
    <Typo
      color="gray-600"
      className={cn(
        "!line-clamp-2 !flex flex-shrink flex-grow items-center whitespace-break-spaces break-words text-sm",
        isRow && "flex-grow-0 text-xs sm:flex-grow sm:!text-base",
        variant === "big" && "text-xs font-semibold md:text-sm lg:text-lg"
      )}
    >
      {authors?.join("\n")}
    </Typo>
  );
};

export default BookAuthor;
