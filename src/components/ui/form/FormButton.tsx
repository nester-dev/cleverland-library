import { FC, PropsWithChildren } from "react";
import { Button, Typo } from "@/components/ui";

const FormButton: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Button type="submit" className="py-[14px]">
      <Typo className="text-xs sm:text-base" fw="medium">
        {children}
      </Typo>
    </Button>
  );
};

export default FormButton;
