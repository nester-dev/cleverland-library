import { FC } from "react";
import cn from "clsx";
import { BookPreviewProps } from "@/components/ui/Book/BookInformation/BookPreview/BookPreview.tsx";
import styles from "./BookImage.module.scss";

const BookImage: FC<BookPreviewProps> = ({ images }) => {
  return (
    <div
      className={cn(
        "mx-auto rounded-[10px] border border-gray-500 bg-gray-400 bg-bookBg bg-center bg-no-repeat",
        styles.image
      )}
    >
      {!!images?.length && <img src={images.pop()?.url} alt="preview" />}
    </div>
  );
};

export default BookImage;
