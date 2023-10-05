import { FC, PropsWithChildren } from "react";
import { Typo } from "@/components/ui";
import {
  OffsetVariants,
  PageItemOffset,
} from "@/components/layout/markup/types.ts";

interface PageListItemProps extends PropsWithChildren {
  leftOffset?: OffsetVariants;
}

const PageListItem: FC<PageListItemProps> = ({ children, leftOffset }) => {
  return (
    <Typo className={PageItemOffset[leftOffset || "normal"]}>{children}</Typo>
  );
};

export default PageListItem;
