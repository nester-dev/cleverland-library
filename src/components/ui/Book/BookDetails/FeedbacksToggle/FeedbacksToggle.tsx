import { Dispatch, FC, SetStateAction } from "react";
import cn from "clsx";
import FeedbacksCount from "@/components/ui/Book/BookDetails/FeedbacksToggle/FeedbacksCount.tsx";
import DetailsHeading from "@/components/ui/Book/BookDetails/DetailsHeading.tsx";
import { useMainStore } from "@/store/mainStore.ts";
import { ReactComponent as Arrow } from "@/assets/icons/arrow-black.svg";

export interface FeedbacksToggleProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isCommentsExists: boolean;
}

const FeedbacksToggle: FC<FeedbacksToggleProps> = ({
  isOpen,
  setIsOpen,
  isCommentsExists,
}) => {
  const book = useMainStore(state => state.selectedBook);

  const handleToggle = () => {
    if (isCommentsExists) {
      setIsOpen(prev => !prev);
    }
  };

  return (
    <button type="button" onClick={handleToggle}>
      <DetailsHeading title="Отзывы">
        <FeedbacksCount count={book?.comments?.length || 0} />
        {isCommentsExists && (
          <Arrow
            className={cn(
              "ml-4 fill-dark transition-all",
              !isOpen && "rotate-180"
            )}
          />
        )}
      </DetailsHeading>
    </button>
  );
};

export default FeedbacksToggle;
