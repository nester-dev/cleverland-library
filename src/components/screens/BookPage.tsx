import { FC, useEffect, useMemo } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { Book, Breadcrumbs, Loader } from "@/components/ui";
import { BookService } from "@/services/book.service.ts";
import { Container } from "@/components/layout";
import { useMainStore } from "@/store/mainStore.ts";
import { useUserStore } from "@/store/userStore.ts";

const BookPage: FC = () => {
  const params = useParams<{ id: string; bookId: string }>();
  const [setSelectedBook, setIsCommentExists] = useMainStore(state => [
    state.setSelectedBook,
    state.setIsCommentExists,
  ]);
  const user = useUserStore(state => state.user);

  const { data, isSuccess, isLoading } = useQuery(
    ["books", "get book by id", params.bookId],
    () => BookService.getBookById(params.bookId || ""),
    {
      enabled: !!params?.bookId,
      select: ({ data }) => data,
    }
  );

  const checkIsCommentExists = useMemo(() => {
    return data?.comments?.reduce(
      (acc, comment) => {
        if (comment.user.commentUserId === user?.id) {
          return {
            isExists: true,
            commentId: String(comment.id),
          };
        }
        return acc;
      },
      { isExists: false, commentId: "" }
    );
  }, [data, user?.id]);

  useEffect(() => {
    if (isSuccess) {
      setSelectedBook(data);

      checkIsCommentExists && setIsCommentExists(checkIsCommentExists);
    }
  }, [data, isSuccess, setSelectedBook]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="pt-[27px]">
      <Breadcrumbs category={params?.id} title={data?.title} />
      <section className="py-[42px]">
        <Container>
          <Book />
        </Container>
      </section>
    </div>
  );
};

export default BookPage;
