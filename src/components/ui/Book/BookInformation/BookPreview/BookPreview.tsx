import { FC } from "react";
import { useMainStore } from "@/store/mainStore.ts";
import BookSlider from "@/components/ui/Book/BookInformation/BookPreview/BookSlider.tsx";
import BookImage from "@/components/ui/Book/BookInformation/BookPreview/BookImage.tsx";
import { IBookImage } from "@/shared/types/book.interface.ts";

export interface BookPreviewProps {
  images?: IBookImage[];
}

const BookPreview: FC = () => {
  const book = useMainStore(state => state.selectedBook);
  return (
    <div className="w-full flex-shrink-0 flex-grow justify-self-center sm:row-span-1  sm:justify-self-start md:row-start-1 md:row-end-3 md:self-start">
      {Number(book?.images?.length) > 1 ? (
        <BookSlider images={book?.images} />
      ) : (
        <BookImage images={book?.images} />
      )}
    </div>
  );
};

export default BookPreview;
