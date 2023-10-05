import { FC, PropsWithChildren } from "react";
import cn from "clsx";
import { Typo } from "@/components/ui";

export interface FieldHelperTextProps extends PropsWithChildren {
  title?: string;
  errorText?: string;
  error?: boolean;
}

const FieldHelperText: FC<FieldHelperTextProps> = ({
  error,
  title,
  children,
  errorText,
}) => {
  return (
    <div className="mt-0.5 h-5 pl-3 text-xs">
      <Typo
        className={cn(
          "transition-all",
          errorText && "opacity-0",
          error && "opacity-100"
        )}
        fw="medium"
        color={error ? "error" : "gray-500"}
      >
        {title || errorText || children}
      </Typo>
    </div>
  );
};

export default FieldHelperText;
