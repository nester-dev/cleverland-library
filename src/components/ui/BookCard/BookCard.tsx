import { FC } from "react";
import cn from "clsx";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import BookCardImage from "@/components/ui/BookCard/BookCardImage.tsx";
import BookCardTitle from "@/components/ui/BookCard/BookCardTitle.tsx";
import BookAuthor from "@/components/ui/Book/BookInformation/BookAuthor.tsx";
import { Button, Rating } from "@/components/ui";
import { GridType } from "@/components/ui/GridControls/types.ts";
import { useMainStore } from "@/store/mainStore.ts";
import { IBook } from "@/shared/types/book.interface.ts";
import { getBookPageUrl } from "@/utils/getBookPageUrl.ts";
import { useUserStore } from "@/store/userStore.ts";
import { getBookStatus } from "@/components/ui/BookCard/helpers.ts";
import { useHandleBookBorrow } from "@/hooks/useHandleBookBorrow.ts";

const BookCard: FC<IBook> = book => {
  const gridType = useMainStore(state => state.gridType);
  const user = useUserStore(state => state.user);
  const { pathname, state } = useLocation();
  const [url, stateData] = getBookPageUrl(pathname, state, book?.id);

  const [bookStatus, buttonText] = getBookStatus(book, user?.id);
  const isRow = gridType === GridType.row;
  const handleClick = useHandleBookBorrow(bookStatus, book);

  return (
    <Link
      to={url}
      state={stateData}
      className={cn(
        "flex h-[470px] w-full flex-col gap-4 justify-self-center rounded-[10px] px-4 pb-4 pt-2 shadow xsm:w-[190px] md:px-2",
        isRow && "!h-auto !w-full !flex-row !p-4"
      )}
    >
      <BookCardImage image={book?.image?.url} />
      <div
        className={cn(
          "flex flex-grow flex-col gap-4",
          isRow && "!flex-row flex-wrap items-center gap-[3px] sm:gap-6"
        )}
      >
        <Rating rating={book?.rating} />
        <div
          className={cn(
            "my-auto flex flex-grow flex-col justify-between",
            isRow &&
              "order-1 my-0 w-full !justify-start gap-[3px] sm:my-auto sm:justify-between sm:gap-0"
          )}
        >
          <BookCardTitle title={book?.title} id={book?.id} />
          <BookAuthor authors={book?.authors} />
        </div>
        <Button
          onClick={handleClick}
          bookStatus={bookStatus}
          className={cn(
            isRow &&
              "!sm:h-10 order-2 mt-4 !w-auto !min-w-[174px] flex-shrink flex-grow"
          )}
        >
          {buttonText}
        </Button>
      </div>
    </Link>
  );
};

export default BookCard;
