import { FC } from "react";
import { Typo } from "@/components/ui";
import { TypoProps } from "@/components/ui/Typo/Typo.tsx";

interface FormTitleProps extends TypoProps {
  title?: string;
}

const FormTitle: FC<FormTitleProps> = ({ title, children, ...rest }) => {
  return (
    <Typo tag="h4" {...rest}>
      {title || children}
    </Typo>
  );
};

export default FormTitle;
