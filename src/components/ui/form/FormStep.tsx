import { FC, useMemo, useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { motion } from "framer-motion";
import cn from "clsx";
import { RegisterFormFields } from "@/components/ui/form/types.ts";
import { getStepInputs } from "@/components/ui/form/helper.tsx";

export interface FormStepProps {
  step: number;
  currentStep: number;
  register: UseFormRegister<RegisterFormFields>;
  errors: FieldErrors<RegisterFormFields>;
}

const FormStep: FC<FormStepProps> = ({
  step,
  register,
  errors,
  currentStep,
}) => {
  const [formFields, setFormFields] = useState<RegisterFormFields>({
    username: "",
    firstName: "",
    password: "",
    email: "",
    phone: "",
    lastName: "",
  });
  const isActive = step === currentStep;

  const errorsCount = Object.keys(errors);

  const formSteps = useMemo(
    () =>
      getStepInputs({
        step,
        setFormFields,
        formFields,
        register,
        errors,
        currentStep,
      }),
    [
      step,
      setFormFields,
      formFields,
      register,
      errors,
      currentStep,
      errorsCount,
    ]
  );

  return (
    <motion.div
      animate={isActive ? { opacity: 1 } : { opacity: 0 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={cn("w-full")}
    >
      {formSteps}
    </motion.div>
  );
};

export default FormStep;
