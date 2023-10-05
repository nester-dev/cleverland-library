import { FC, useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Loader, ModalWrapper } from "@/components/ui";
import DatePicker from "@/components/ui/DatePicker/DatePicker.tsx";
import { ModalTypes } from "@/components/ui/modal/types.ts";
import { getModalText } from "@/components/ui/modal/DateModal/helper.ts";
import { useDateStore } from "@/store/dateStore.ts";
import { BookingServices } from "@/services/booking.service.ts";
import { useMainStore } from "@/store/mainStore.ts";
import { useUserStore } from "@/store/userStore.ts";
import { ResponseMessages } from "@/shared/constants.ts";

interface Props {
  type: ModalTypes;
}

const DateModal: FC<Props> = ({ type }) => {
  const selectedDay = useDateStore(state => state.selectedDate);
  const [selectedBook, setMessage, setModal] = useMainStore(state => [
    state.selectedBook,
    state.setResponseMessage,
    state.setActiveModal,
  ]);
  const user = useUserStore(state => state.user);
  const [title, buttonText] = getModalText(type);
  const queryCache = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  const { mutate, isSuccess, isError } = useMutation(
    ["borrow book"],
    BookingServices.borrowBook
  );

  const {
    mutate: cancelBorrow,
    isSuccess: isCancelSuccess,
    isError: isCancelError,
  } = useMutation(["cancel borrow"], BookingServices.cancelBorrow, {});

  const handleBookBorrow = () => {
    setIsLoading(true);
    if (type === ModalTypes.DATE && selectedBook && user && selectedDay) {
      mutate({
        data: {
          book: String(selectedBook.id),
          customer: String(user.id),
          dateOrder: selectedDay,
          order: true,
        },
      });
    }
  };

  useEffect(() => {
    if (isSuccess || isCancelSuccess) {
      (async () => {
        await queryCache.invalidateQueries(["books"]);
        setIsLoading(false);

        if (isSuccess) {
          const message =
            type === ModalTypes.DATE
              ? ResponseMessages.BOOKING_SUCCESS
              : ResponseMessages.BOOKING_CHANGE_SUCCESS;
          setMessage(message);
          setModal(null);
        }

        if (isCancelSuccess) {
          setMessage(ResponseMessages.BOOKING_CANCEL_SUCCESS);
          setModal(null);
        }
      })();
    }
  }, [isSuccess, isCancelSuccess, type]);

  useEffect(() => {
    if (isError || isCancelError) {
      if (isError) {
        const message =
          type === ModalTypes.DATE
            ? ResponseMessages.ERROR
            : ResponseMessages.BOOKING_CHANGE_ERROR;
        setMessage(message);
      }

      if (isCancelError) {
        setMessage(ResponseMessages.BOOKING_CANCEL_ERROR);
      }

      setModal(null);
    }
  }, [isError, isCancelError, type]);

  return (
    <>
      {isLoading && <Loader />}
      <ModalWrapper title={title}>
        <DatePicker />

        <div className="flex w-full max-w-[410px] flex-col gap-4">
          <Button disabled={!selectedDay} onClick={handleBookBorrow}>
            {buttonText}
          </Button>
          {type === ModalTypes.CHANGE_DATE && (
            <Button
              variant="outlined"
              onClick={() => {
                setIsLoading(true);
                cancelBorrow(selectedBook?.booking?.id);
              }}
            >
              отменить бронь
            </Button>
          )}
        </div>
      </ModalWrapper>
    </>
  );
};

export default DateModal;
