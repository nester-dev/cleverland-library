import { FC } from "react";
import { useMainStore } from "@/store/mainStore.ts";
import SpecificationsRow from "@/components/ui/Book/BookDetails/BookSpecifications/SpecificationsRow.tsx";
import {
  FIRST_COLUMN_TITLES,
  SECOND_COLUMN_TITLES,
} from "@/components/ui/Book/BookDetails/BookSpecifications/data.ts";

interface SpecificationColumnProps {
  data: typeof FIRST_COLUMN_TITLES | typeof SECOND_COLUMN_TITLES;
}

const SpecificationColumn: FC<SpecificationColumnProps> = ({ data }) => {
  const book = useMainStore(state => state.selectedBook);
  return (
    <div className="flex flex-grow flex-col gap-4">
      {Object.keys(data).map(title => (
        <SpecificationsRow
          key={title}
          title={data[title]}
          info={book?.[title]}
        />
      ))}
    </div>
  );
};

export default SpecificationColumn;
