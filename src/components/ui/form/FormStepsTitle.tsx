import { FC } from "react";
import { Typo } from "@/components/ui";
import { TOTAL_FORM_STEPS } from "@/shared/constants.ts";

interface FormStepsProps {
  step: number;
}

const FormStepsTitle: FC<FormStepsProps> = ({ step }) => {
  return (
    <Typo
      fw="semibold"
      className="text-sm"
    >{`${step} шаг из ${TOTAL_FORM_STEPS}`}</Typo>
  );
};

export default FormStepsTitle;
