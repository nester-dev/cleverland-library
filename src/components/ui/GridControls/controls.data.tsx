import { GridType } from "@/components/ui/GridControls/types.ts";
import { ReactComponent as GridColumn } from "@/assets/icons/grid-column.svg";
import { ReactComponent as GridRow } from "@/assets/icons/grid-row.svg";

export const controlsData = [
  {
    id: GridType.column,
    icon: GridColumn,
  },
  {
    id: GridType.row,
    icon: GridRow,
  },
];
