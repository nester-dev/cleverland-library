import { FC } from "react";
import BookTitle from "@/components/ui/Book/BookInformation/BookTitle.tsx";
import { useMainStore } from "@/store/mainStore.ts";
import BookAuthor from "@/components/ui/Book/BookInformation/BookAuthor.tsx";
import { Button } from "@/components/ui";
import { useHandleBookBorrow } from "@/hooks/useHandleBookBorrow.ts";
import { getBookStatus } from "@/components/ui/BookCard/helpers.ts";
import { useUserStore } from "@/store/userStore.ts";

const BookInformation: FC = () => {
  const book = useMainStore(state => state.selectedBook);
  const user = useUserStore(state => state.user);

  const [bookStatus, buttonText] = getBookStatus(book, user?.id);
  const handleClick = useHandleBookBorrow(bookStatus);

  return (
    <div className="col-span-2 row-span-2 sm:col-start-2 sm:col-end-3 sm:row-span-1">
      <div className="flex flex-col gap-2 sm:gap-8 lg:gap-6">
        <BookTitle tag="h3" className="!text-lg !font-bold md:!text-[32px]">
          {book?.title}
        </BookTitle>
        <BookAuthor variant="big" authors={book?.authors} />
      </div>
      <Button
        size="large"
        className="mt-[42px] max-w-full sm:mt-8 sm:max-w-[306px] lg:max-w-[350px]"
        onClick={handleClick}
        bookStatus={bookStatus}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default BookInformation;
