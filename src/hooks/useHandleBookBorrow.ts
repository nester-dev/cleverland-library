import { BookStatus } from "@/components/ui/BookCard/types.ts";
import { useMainStore } from "@/store/mainStore.ts";
import { ModalTypes } from "@/components/ui/modal/types.ts";
import { IBook } from "@/shared/types/book.interface.ts";

export const useHandleBookBorrow = (bookStatus: BookStatus, book?: IBook) => {
  const setActiveModal = useMainStore(state => state.setActiveModal);
  const setSelectedBook = useMainStore(state => state.setSelectedBook);

  return (e: React.MouseEvent) => {
    e.preventDefault();
    book && setSelectedBook(book);

    if (bookStatus === BookStatus.Available) {
      setActiveModal(ModalTypes.DATE);
    }

    if (bookStatus === BookStatus.MyBorrowed) {
      setActiveModal(ModalTypes.CHANGE_DATE);
    }
  };
};
