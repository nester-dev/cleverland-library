import React, { FC, useEffect, useRef, useState } from "react";
import cn from "clsx";
import { ReactComponent as Search } from "@/assets/icons/search.svg";
import { ReactComponent as Close } from "@/assets/icons/Icon_close.svg";
import { CLEAR_INPUT } from "@/shared/constants.ts";
import { useMainStore } from "@/store/mainStore.ts";
import { useClickOutside } from "@/hooks/useClickOutside.ts";

const SearchBar: FC = () => {
  const [searchTerm, setSearchTerm] = useMainStore(state => [
    state.searchTerm,
    state.setSearchTerm,
  ]);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = () => {
    setIsFocused(false);
  };

  useClickOutside<HTMLDivElement>(inputRef, handleClickOutside);

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  const handleClearInput = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSearchTerm("");
    setIsFocused(false);
  };

  return (
    <button
      type="button"
      className="flex w-8 cursor-text lg:mr-0 lg:w-full lg:max-w-[350px]"
      onClick={() => setIsFocused(true)}
    >
      <div
        ref={inputRef}
        className={cn(
          "pointer-events-none absolute w-full lg:relative",
          isFocused && "pointer-events-auto"
        )}
      >
        <input
          className={cn(
            "z-3 block h-8 w-0 rounded-full border border-transparent px-4 py-2 shadow outline-none transition-all placeholder:text-sm focus:ring-0 lg:h-[38px] lg:w-full lg:py-2.5 lg:pl-10 lg:pr-4",
            isFocused && "!w-full !border-orange pr-9"
          )}
          placeholder="Поиск книги или автора…"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <Search
          className={cn(
            "pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 lg:left-4",
            isFocused && "invisible opacity-0 lg:visible lg:opacity-100"
          )}
        />
        {searchTerm && isFocused && (
          <Close
            id={CLEAR_INPUT}
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={handleClearInput}
          />
        )}
      </div>
    </button>
  );
};

export default SearchBar;
