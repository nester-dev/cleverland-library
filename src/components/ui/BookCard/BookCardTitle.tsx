import { FC, useMemo } from "react";
import { GridType } from "@/components/ui/GridControls/types.ts";
import { useMainStore } from "@/store/mainStore.ts";
import BookTitle from "@/components/ui/Book/BookInformation/BookTitle.tsx";

const BookCardTitle: FC<{ title: string; id: number }> = ({ title, id }) => {
  const [gridType, searchTerm] = useMainStore(state => [
    state.gridType,
    state.searchTerm,
  ]);

  const getHighlightedText = useMemo(
    () => () => {
      const parts = title.split(new RegExp(`(${searchTerm})`, "gi"));
      return (
        <>
          {parts.map((part, idx) =>
            part.toLowerCase() === searchTerm.toLowerCase() ? (
              <span key={part + id + String(idx)} className="text-error">
                {part}
              </span>
            ) : (
              part
            )
          )}
        </>
      );
    },
    [title, searchTerm]
  );

  const isRow = gridType === GridType.row;
  return (
    <BookTitle isRow={isRow}>
      {searchTerm ? getHighlightedText() : title}
    </BookTitle>
  );
};

export default BookCardTitle;
