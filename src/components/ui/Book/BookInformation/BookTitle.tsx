import { FC } from "react";
import cn from "clsx";
import { Typo } from "@/components/ui";
import { TypoProps } from "@/components/ui/Typo/Typo.tsx";

interface TitleProps extends TypoProps {
  isRow?: boolean;
  isPage?: boolean;
}

const BookTitle: FC<TitleProps> = ({ isRow, children, className, ...rest }) => {
  return (
    <div
      className={cn(
        "flex flex-shrink flex-grow items-center",
        isRow && "flex-grow-0 sm:!flex-grow"
      )}
    >
      <Typo
        className={cn(
          "line-clamp-3 break-words text-sm font-semibold",
          isRow && "text-sm !font-bold sm:!text-2xl",
          className
        )}
        {...rest}
      >
        {children}
      </Typo>
    </div>
  );
};

export default BookTitle;
