import { FC } from "react";
import cn from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useMainStore } from "@/store/mainStore.ts";
import FeedbackItem from "@/components/ui/Book/BookDetails/BookFeedback/FeedbackItem.tsx";
import { FeedbacksToggleProps } from "@/components/ui/Book/BookDetails/FeedbacksToggle/FeedbacksToggle.tsx";

const BookFeedback: FC<Pick<FeedbacksToggleProps, "isOpen">> = ({ isOpen }) => {
  const book = useMainStore(state => state.selectedBook);
  return (
    <AnimatePresence>
      <motion.div
        animate={
          isOpen
            ? {
                height: "auto",
                opacity: 100,
                marginBottom: "42px",
                display: "flex",
              }
            : {
                height: 0,
                marginBottom: 0,
                opacity: 0,
                transitionEnd: {
                  display: "none",
                },
              }
        }
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "flex max-w-[730px] flex-col gap-8 overflow-hidden sm:gap-[42px]"
        )}
      >
        {book?.comments?.map(item => (
          <FeedbackItem key={item.id} feedback={item} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default BookFeedback;
