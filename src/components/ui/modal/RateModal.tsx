import { FC, useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Loader, ModalWrapper, Typo } from "@/components/ui";
import { ReactComponent as StarOutline } from "@/assets/icons/Icon_star.svg";
import { CommentService } from "@/services/comment.service.ts";
import { useMainStore } from "@/store/mainStore.ts";
import { getUserFromStorage } from "@/services/auth/auth.helper.ts";

const RateModal: FC = () => {
  const user = getUserFromStorage();
  const [setSelectedBook, book] = useMainStore(state => [
    state.setActiveModal,
    state.selectedBook,
  ]);
  const [stars, setStars] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const queryCache = useQueryClient();

  const { mutate, isSuccess } = useMutation(
    ["leave feedback"],
    CommentService.leaveFeedback
  );

  useEffect(() => {
    (async () => {
      if (isSuccess) {
        await queryCache.invalidateQueries(["get book by id"]);
        setIsLoading(false);
        setSelectedBook(null);
      }
    })();
  }, [isSuccess]);

  const handleLeaveFeedback = () => {
    setIsLoading(true);
    mutate({
      data: {
        rating: stars,
        text: feedback,
        book: book?.id || "",
        user: user.id,
      },
    });
  };

  return (
    <>
      {isLoading && <Loader />}
      <ModalWrapper title="Оцените книгу">
        <div>
          <Typo fw="semibold" center>
            Ваша оценка
          </Typo>

          <div className="mt-4 flex gap-1.5">
            {[1, 2, 3, 4, 5].map(elem => {
              if (stars >= elem) {
                return (
                  <StarOutline
                    key={elem}
                    className="h-8 w-8 cursor-pointer fill-gold sm:h-[42px] sm:w-[42px]"
                    onClick={() => setStars(elem)}
                  />
                );
              }
              return (
                <StarOutline
                  key={elem}
                  className="h-8 w-8 cursor-pointer hover:fill-gold sm:h-[42px] sm:w-[42px]"
                  onClick={() => setStars(elem)}
                />
              );
            })}
          </div>
        </div>

        <textarea
          value={feedback}
          placeholder="Оставить отзыв"
          className="h-[132px] w-full resize-none border-none bg-gray-400 px-3 py-[19px] placeholder:text-sm focus:ring-0"
          onChange={e => setFeedback(e.target.value)}
        />

        <Button className="max-w-[410px]" onClick={handleLeaveFeedback}>
          оценить
        </Button>
      </ModalWrapper>
    </>
  );
};

export default RateModal;
