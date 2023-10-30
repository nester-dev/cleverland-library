import { FC, useState } from "react";
import DetailsItem from "@/components/ui/Book/BookDetails/DetailsItem.tsx";
import DetailsHeading from "@/components/ui/Book/BookDetails/DetailsHeading.tsx";
import { Button, Rating } from "@/components/ui";
import { useMainStore } from "@/store/mainStore.ts";
import BookSpecifications from "@/components/ui/Book/BookDetails/BookSpecifications/BookSpecifications.tsx";
import BookFeedback from "@/components/ui/Book/BookDetails/BookFeedback/BookFeedback.tsx";
import FeedbacksToggle from "@/components/ui/Book/BookDetails/FeedbacksToggle/FeedbacksToggle.tsx";
import { ModalTypes } from "@/components/ui/modal/types.ts";

const BookDetails: FC = () => {
  const [book, userComment, setActiveModal] = useMainStore(state => [
    state.selectedBook,
    state.userComment,
    state.setActiveModal,
  ]);
  const [isOpen, setIsOpen] = useState(!!book?.comments?.length);

  return (
    <div className="mt-[42px] flex flex-col gap-6 md:gap-[52px] lg:gap-[62px]">
      <DetailsItem heading={<DetailsHeading title="Рейтинг" />}>
        <Rating rating={book?.rating} showDigits />
      </DetailsItem>

      <DetailsItem heading={<DetailsHeading title="Подробная информация" />}>
        <BookSpecifications />
      </DetailsItem>

      <div>
        <DetailsItem
          heading={
            <FeedbacksToggle
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              isCommentsExists={!!book?.comments?.length}
            />
          }
        >
          <BookFeedback isOpen={isOpen} />
        </DetailsItem>

        <Button
          onClick={() => setActiveModal(ModalTypes.RATE)}
          size="large"
          className="max-w-[350px]"
        >
          {userComment?.isExists ? "Изменить отзыв" : "Оставить отзыв"}
        </Button>
      </div>
    </div>
  );
};
export default BookDetails;
