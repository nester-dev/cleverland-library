import { FC } from "react";
import cn from "clsx";
import { Typo } from "@/components/ui";
import { FieldControlProps } from "@/components/ui/form/FieldControl.tsx";

interface FieldLabelProps extends FieldControlProps {
  htmlFor?: string;
}

const FieldLabel: FC<FieldLabelProps> = ({
  label,
  htmlFor,
  children,
  isActive,
}) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute left-3 top-[16px] z-3 text-sm transition-all md:text-base",
        isActive && "!top-1.5 !text-xs font-medium text-gray-500"
      )}
    >
      <Typo htmlFor={htmlFor}>{label || children}</Typo>
    </div>
  );
};

export default FieldLabel;
