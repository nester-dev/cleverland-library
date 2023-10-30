import { GridType } from "@/components/ui/GridControls/types.ts";
import { IUser } from "@/shared/types/user.interface.ts";
import { IBook } from "@/shared/types/book.interface.ts";
import { SortingType } from "@/components/ui/Sorting/types.ts";
import { ModalTypes } from "@/components/ui/modal/types.ts";
import { ResponseMessages } from "@/shared/constants.ts";

export interface MainStore {
  gridType: GridType;
  searchTerm: string;
  sorting: SortingType;
  isBurgerOpen: boolean;
  allBooks: IBook[];
  selectedBook: IBook | null;
  responseMessage: ResponseMessages | null;
  activeModal: ModalTypes | null;
  userComment: {
    isExists: boolean;
    commentId: string | null;
  };
  setGridType: (type: GridType) => void;
  setOpenBurger: (isOpen: boolean) => void;
  setAllBooks: (books: IBook[]) => void;
  setSearchTerm: (term: string) => void;
  changeSorting: (type: SortingType) => void;
  setSelectedBook: (book: IBook) => void;
  setResponseMessage: (message?: ResponseMessages | null) => void;
  setActiveModal: (modal: ModalTypes | null) => void;
  setIsCommentExists: (userComment: {
    isExists: boolean;
    commentId: string | null;
  }) => void;
}

export interface UserStore {
  user: IUser | null;
  setUser: (user: IUser) => void;
}

export interface DateStore {
  selectedDate: Date | null;
  selectedMonth: Date;
  setSelectedDate: (date: Date | null) => void;
  setSelectedMonth: (date: Date) => void;
}
