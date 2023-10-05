import { FC } from "react";
import SpecificationColumn from "@/components/ui/Book/BookDetails/BookSpecifications/SpecificationColumn.tsx";
import {
  FIRST_COLUMN_TITLES,
  SECOND_COLUMN_TITLES,
} from "@/components/ui/Book/BookDetails/BookSpecifications/data.ts";

const BookSpecifications: FC = () => {
  return (
    <div className="flex flex-col justify-between gap-x-8 gap-y-4 sm:flex-row">
      <SpecificationColumn data={FIRST_COLUMN_TITLES} />
      <SpecificationColumn data={SECOND_COLUMN_TITLES} />
    </div>
  );
};

export default BookSpecifications;
