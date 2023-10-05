import { FC, useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { Book, Breadcrumbs, Loader } from "@/components/ui";
import { BookService } from "@/services/book.service.ts";
import { Container } from "@/components/layout";
import { useMainStore } from "@/store/mainStore.ts";

const BookPage: FC = () => {
  const { state } = useLocation();
  const params = useParams<{ id: string; bookId: string }>();
  const setSelectedBook = useMainStore(state => state.setSelectedBook);
  const { data, isSuccess, isLoading } = useQuery(
    ["books", "get book by id", params.bookId],
    () => BookService.getBookById(params.bookId || ""),
    {
      enabled: !!params?.bookId,
      select: ({ data }) => data,
    }
  );

  useEffect(() => {
    if (isSuccess) {
      setSelectedBook(data);
    }
  }, [data, isSuccess, setSelectedBook]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="pt-[27px]">
      <Breadcrumbs category={state} title={data?.title} />
      <section className="py-[42px]">
        <Container>
          <Book />
        </Container>
      </section>
    </div>
  );
};

export default BookPage;
