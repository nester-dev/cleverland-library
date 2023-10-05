import { FC, PropsWithChildren } from "react";
import cn from "clsx";

interface GridControlButtonProps extends PropsWithChildren {
  isActive: boolean;
  onClick: () => void;
}

const GridControlButton: FC<GridControlButtonProps> = ({
  children,
  onClick,
  isActive,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-full shadow lg:h-[38px] lg:w-[38px]",
        isActive && "bg-mainGradient"
      )}
    >
      {children}
    </button>
  );
};

export default GridControlButton;
