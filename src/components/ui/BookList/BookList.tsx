import { FC, useEffect, useState } from "react";
import cn from "clsx";
import { useLocation, useParams } from "react-router";
import { BookCard, Loader, Typo } from "@/components/ui";
import { GridType } from "@/components/ui/GridControls/types.ts";
import { useMainStore } from "@/store/mainStore.ts";
import { ResponseMessages, Routes } from "@/shared/constants.ts";
import { useGetAllBooks } from "@/hooks/useGetAllBooks.ts";
import { IBook } from "@/shared/types/book.interface.ts";
import { useSortBooks } from "@/hooks/useSortBooks.ts";

const BookList: FC = () => {
  const [gridType, setAllBooks, searchTerm, sorting, setResponseMessage] =
    useMainStore(state => [
      state.gridType,
      state.setAllBooks,
      state.searchTerm,
      state.sorting,
      state.setResponseMessage,
    ]);
  const { pathname, state } = useLocation();
  const params = useParams<{ id: string }>();
  const { data, isSuccess, isLoading, isError } = useGetAllBooks();
  const [books, setBooks] = useState<IBook[]>([]);
  const sortBooks = useSortBooks(sorting, books);

  useEffect(() => {
    setBooks(sortBooks());
  }, [sorting]);

  useEffect(() => {
    if (isSuccess) {
      setBooks(data);
      setAllBooks(data);
    }

    if (isError && !isLoading) {
      setResponseMessage(ResponseMessages.ERROR);
    }
  }, [data, isSuccess, setAllBooks, isError, isLoading]);

  useEffect(() => {
    if (
      data &&
      state?.name &&
      pathname === `${Routes.CATEGORY}/${params?.id}`
    ) {
      const filteredBooks = data?.filter(
        elem =>
          elem.categories.includes(state.name) &&
          elem.title.includes(searchTerm)
      );
      setBooks(filteredBooks || []);
    }
    if (pathname === Routes.HOME) {
      const filteredBooks = data?.filter(elem =>
        elem.title.includes(searchTerm)
      );
      setBooks(filteredBooks || []);
    }
  }, [data, params, pathname, state, searchTerm]);

  const isRow = gridType === GridType.row;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div
      className={cn(
        books.length &&
          "grid grid-flow-row grid-cols-[repeat(auto-fill,_minmax(190px,_1fr))] justify-items-start gap-4",
        isRow && "!flex flex-col"
      )}
    >
      {!books.length && !isLoading ? (
        <Typo tag="h3" center color="gray-500" className="my-auto">
          По запросу ничего не найдено
        </Typo>
      ) : (
        books?.map(book => <BookCard key={book.id} {...book} />)
      )}
    </div>
  );
};

export default BookList;
