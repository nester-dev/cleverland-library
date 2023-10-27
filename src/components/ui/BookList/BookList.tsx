import { FC, useEffect, useState } from "react";
import cn from "clsx";
import { useLocation } from "react-router";
import { BookCard, Loader, Typo } from "@/components/ui";
import { GridType } from "@/components/ui/GridControls/types.ts";
import { useMainStore } from "@/store/mainStore.ts";
import { useGetAllBooks } from "@/hooks/useGetAllBooks.ts";
import { useSortBooks } from "@/hooks/useSortBooks.ts";
import { useGetBooksByCategory } from "@/hooks/useGetBooksByCategory.ts";
import { IBook } from "@/shared/types/book.interface.ts";
import { ResponseMessages } from "@/shared/constants.ts";

const BookList: FC = () => {
  const { state } = useLocation();

  const {
    data: allBooks,
    isSuccess,
    isFetching,
    isError,
  } = useGetAllBooks(state?.path);
  const {
    data: booksByCategory,
    isSuccess: booksByCategorySuccess,
    error: booksByCategoryError,
    isFetching: booksByCategoryLoading,
  } = useGetBooksByCategory(state?.path);

  const [
    gridType,
    fetchedBooks,
    setFetchedBooks,
    searchTerm,
    sorting,
    setResponseMessage,
  ] = useMainStore(state => [
    state.gridType,
    state.allBooks,
    state.setAllBooks,
    state.searchTerm,
    state.sorting,
    state.setResponseMessage,
  ]);
  const [books, setBooks] = useState<IBook[]>(fetchedBooks);

  const sortBooks = useSortBooks(sorting, books);

  useEffect(() => {
    if (isSuccess && (!state?.path || state?.path === "all")) {
      setFetchedBooks(allBooks);
      setBooks(allBooks);
    }

    if (booksByCategorySuccess) {
      setFetchedBooks(booksByCategory);
      setBooks(booksByCategory);
    }
  }, [isSuccess, booksByCategorySuccess]);

  useEffect(() => {
    setBooks(sortBooks());
  }, [sorting]);

  useEffect(() => {
    if (
      (isError && !isFetching) ||
      (booksByCategoryError && !booksByCategoryLoading)
    ) {
      setResponseMessage(ResponseMessages.ERROR);
    }
  }, [isError, isFetching, booksByCategoryError, booksByCategoryLoading]);

  useEffect(() => {
    if (books) {
      const filteredBooks = fetchedBooks?.filter(elem =>
        elem.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setBooks(filteredBooks || []);
    }
  }, [searchTerm]);

  const isRow = gridType === GridType.row;

  return (
    <>
      {isFetching || booksByCategoryLoading ? (
        <Loader />
      ) : (
        <div
          className={cn(
            books.length &&
              "grid grid-flow-row grid-cols-[repeat(auto-fill,_minmax(190px,_1fr))] justify-items-start gap-4",
            isRow && "!flex flex-col"
          )}
        >
          {!books.length ? (
            <Typo tag="h3" center color="gray-500" className="my-auto">
              По запросу ничего не найдено
            </Typo>
          ) : (
            books?.map(book => <BookCard key={book.id} {...book} />)
          )}
        </div>
      )}
    </>
  );
};

export default BookList;
