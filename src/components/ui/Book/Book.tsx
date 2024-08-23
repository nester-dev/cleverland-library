import { FC } from "react";
import BookDetails from "./BookDetails/BookDetails.tsx";
import BookDescription from "./BookInformation/BookDescription.tsx";
import BookInformation from "./BookInformation/BookInformation.tsx";
import BookPreview from "./BookInformation/BookPreview/BookPreview.tsx";

const Book: FC = () => {
  return (
    <>
      <div className="grid auto-rows-min grid-cols-1 gap-y-[30px] sm:grid-cols-[136px_auto] sm:gap-x-[30px] md:grid-cols-[40.2%_auto]">
        <BookPreview />
        <BookInformation />
        <BookDescription />
      </div>
      <BookDetails />
    </>
  );
};

export default Book;
