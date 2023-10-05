import { FC, MouseEventHandler, PropsWithChildren } from "react";
import cn from "clsx";
import { VariantsButtonType } from "@/components/ui/Button/types.ts";
import { BookStatus } from "@/components/ui/BookCard/types.ts";

interface ButtonProps extends PropsWithChildren {
  type?: VariantsButtonType;
  onClick?: MouseEventHandler;
  className?: string;
  size?: "small" | "large";
  variant?: "filled" | "outlined";
  disabled?: boolean;
  bookStatus?: BookStatus;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
  type = "button",
  size,
  disabled,
  bookStatus,
  variant = "filled",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-full rounded-[20px] py-[11px] text-xs font-semibold uppercase",
        className,
        size === "large" && "py-[14px]",
        variant === "filled"
          ? "bg-mainGradient text-white"
          : "border border-gray-700 bg-none text-dark transition-all hover:shadow-btnHover active:shadow-btnPressed",
        disabled && "!bg-gray-300 !bg-none",
        bookStatus === BookStatus.Borrowed &&
          "!border !border-gray-700 !bg-gray-400 !bg-none !text-gray-500",
        (bookStatus === BookStatus.MyBorrowed || variant === "outlined") &&
          "!border !border-gray-700 !bg-transparent !bg-none !text-dark transition-all hover:shadow-btnHover active:shadow-btnPressed"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
