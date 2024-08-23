import { ButtonHTMLAttributes, FC } from "react";
import { Button, Typo } from "@/components/ui";

const FormButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  type = "submit",
  ...rest
}) => {
  return (
    <Button type={type} {...rest} className="py-[14px]">
      <Typo className="text-xs sm:text-base" fw="medium">
        {children}
      </Typo>
    </Button>
  );
};

export default FormButton;
