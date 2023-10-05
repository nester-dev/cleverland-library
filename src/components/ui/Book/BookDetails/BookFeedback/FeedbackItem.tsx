import { FC } from "react";
import { IFeedback } from "@/shared/types/book.interface.ts";
import FeedbackFrom from "@/components/ui/Book/BookDetails/BookFeedback/FeedbackFrom.tsx";
import { Rating, Typo } from "@/components/ui";

export interface FeedbackItemProps {
  feedback: IFeedback;
}

const FeedbackItem: FC<FeedbackItemProps> = ({ feedback }) => {
  return (
    <div className="flex flex-col gap-4">
      <FeedbackFrom feedback={feedback} />
      <Rating rating={feedback?.rating} className="!h-6 !w-6" />
      <Typo>{feedback?.text}</Typo>
    </div>
  );
};

export default FeedbackItem;
