import { Dispatch, FC, SetStateAction } from "react";
import cn from "clsx";
import FeedbacksCount from "@/components/ui/Book/BookDetails/FeedbacksToggle/FeedbacksCount.tsx";
import DetailsHeading from "@/components/ui/Book/BookDetails/DetailsHeading.tsx";
import { useMainStore } from "@/store/mainStore.ts";
import { ReactComponent as Arrow } from "@/assets/icons/arrow-black.svg";

export interface FeedbacksToggleProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const FeedbacksToggle: FC<FeedbacksToggleProps> = ({ isOpen, setIsOpen }) => {
  const book = useMainStore(state => state.selectedBook);

  return (
    <button type="button" onClick={() => setIsOpen(prev => !prev)}>
      <DetailsHeading title="Отзывы">
        <FeedbacksCount count={book?.comments?.length} />
        <Arrow className={cn("ml-4 transition-all", !isOpen && "rotate-180")} />
      </DetailsHeading>
    </button>
  );
};

export default FeedbacksToggle;
