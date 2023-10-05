import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { GridType } from "@/components/ui/GridControls/types.ts";
import { MainStore } from "@/store/types.ts";
import { SortingType } from "@/components/ui/Sorting/types.ts";

export const useMainStore = create<MainStore>()(
  immer(set => ({
    gridType: GridType.column,
    searchTerm: "",
    sorting: SortingType.DESC,
    isBurgerOpen: false,
    allBooks: [],
    selectedBook: null,
    responseMessage: null,
    activeModal: null,
    setGridType: type => set({ gridType: type }),
    setOpenBurger: isOpen => set({ isBurgerOpen: isOpen }),
    setSearchTerm: term => set({ searchTerm: term }),
    setAllBooks: books => set({ allBooks: books }),
    changeSorting: type => set({ sorting: type }),
    setSelectedBook: book => set({ selectedBook: book }),
    setResponseMessage: message => set({ responseMessage: message }),
    setActiveModal: modal => set({ activeModal: modal }),
  }))
);
