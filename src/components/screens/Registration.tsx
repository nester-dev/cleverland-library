import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AnimatePresence } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import FormTitle from "@/components/ui/form/FormTitle.tsx";
import AuthenticationType from "@/components/ui/form/AuthenticationType.tsx";
import FormStepsTitle from "@/components/ui/form/FormStepsTitle.tsx";
import { TOTAL_FORM_STEPS } from "@/shared/constants.ts";
import FormWrapper from "@/components/ui/form/FormWrapper.tsx";
import { RegisterFormFields } from "@/components/ui/form/types.ts";
import FormStep from "@/components/ui/form/FormStep.tsx";
import { getButtonText } from "@/components/ui/form/helper.tsx";
import { AuthService } from "@/services/auth/auth.service.ts";
import FormButton from "@/components/ui/form/FormButton.tsx";

const Registration: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormFields>({ reValidateMode: "onSubmit" });
  const { mutate, isLoading } = useMutation(
    ["register user"],
    AuthService.register
  );
  const [step, setStep] = useState(1);

  const onSubmit: SubmitHandler<RegisterFormFields> = data => {
    if (!Object.keys(errors).length && step < TOTAL_FORM_STEPS) {
      setStep(prev => prev + 1);
    }

    if (step === TOTAL_FORM_STEPS) {
      mutate(data);
    }
  };

  const buttonText = getButtonText(step);

  return (
    <FormWrapper submit={handleSubmit(onSubmit)} isLoading={isLoading}>
      <div className="flex flex-col gap-2">
        <FormTitle>Регистрация</FormTitle>
        <FormStepsTitle step={step} />
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <FormStep
          key={step}
          step={step}
          register={register}
          errors={errors}
          currentStep={step}
        />
      </AnimatePresence>

      <div className="flex flex-col gap-4">
        <FormButton>{buttonText}</FormButton>

        <AuthenticationType />
      </div>
    </FormWrapper>
  );
};

export default Registration;
