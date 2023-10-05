import { FC } from "react";
import { Typo } from "@/components/ui";
import { useMainStore } from "@/store/mainStore.ts";

const BookDescription: FC = () => {
  const book = useMainStore(state => state.selectedBook);

  return (
    <div className="col-start-1 col-end-3 row-span-3 mt-3 flex flex-col gap-4 sm:row-start-2 sm:row-end-2 md:col-start-2 md:gap-8 lg:mt-4">
      <Typo tag="h5">О книге</Typo>
      <Typo className="whitespace-break-spaces break-words">
        {book?.description?.replace(/\\r\\n|\\n|\\r/g, "\n")}
      </Typo>
    </div>
  );
};

export default BookDescription;
