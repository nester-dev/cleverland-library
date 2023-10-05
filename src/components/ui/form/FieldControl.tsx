import { FC, PropsWithChildren } from "react";
import cn from "clsx";
import FieldLabel from "@/components/ui/form/FieldLabel.tsx";

export interface FieldControlProps extends PropsWithChildren {
  label?: string;
  id?: string;
  isActive: boolean;
  className?: string;
}

const FieldControl: FC<FieldControlProps> = ({
  label,
  id,
  children,
  isActive,
  className,
}) => {
  return (
    <div className={cn("relative", className)}>
      {label && <FieldLabel htmlFor={id} label={label} isActive={isActive} />}
      {children}
    </div>
  );
};

export default FieldControl;
