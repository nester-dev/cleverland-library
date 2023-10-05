import { Dispatch, SetStateAction } from "react";
import InputField from "@/components/ui/form/InputField.tsx";
import { RegisterFormFields } from "@/components/ui/form/types.ts";
import { FormStepProps } from "@/components/ui/form/FormStep.tsx";
import {
  EMAIL_VALIDATION_PATTERN,
  PHONE_VALIDATION_PATTERN,
} from "@/components/ui/form/patterns.ts";

interface Props extends FormStepProps {
  formFields: RegisterFormFields;
  setFormFields: Dispatch<SetStateAction<RegisterFormFields>>;
}

export const getStepInputs = ({
  step,
  setFormFields,
  formFields,
  register,
  errors,
  currentStep,
}: Props) => {
  switch (step) {
    case 1:
      return (
        <>
          <InputField
            {...register("username", { required: step === currentStep })}
            name="username"
            label="Придумайте логин для входа"
            helperText="Используйте для логина латинский алфавит и цифры"
            fullWidth
            value={formFields.username}
            onChange={e =>
              setFormFields({ ...formFields, username: e.target.value })
            }
            bottomOffset="mb-4"
            error={!!errors.username}
          />

          <InputField
            {...register("password", {
              required: step === currentStep,
            })}
            name="password"
            label="Пароль"
            helperText="Пароль не менее 8 символов, с заглавной буквой и цифрой"
            fullWidth
            value={formFields.password}
            iconRight
            type="password"
            onChange={e =>
              setFormFields({ ...formFields, password: e.target.value })
            }
            error={!!errors.password}
          />
        </>
      );

    case 2:
      return (
        <>
          <InputField
            {...register("firstName", { required: step === currentStep })}
            name="firstName"
            label="Имя"
            errorText="Поле не может быть пустым"
            fullWidth
            value={formFields.firstName}
            onChange={e =>
              setFormFields({ ...formFields, firstName: e.target.value })
            }
            bottomOffset="mb-4"
            error={!!errors.firstName}
          />

          <InputField
            {...register("lastName", { required: step === currentStep })}
            name="lastName"
            label="Фамилия"
            errorText="Поле не может быть пустым"
            fullWidth
            value={formFields.lastName}
            onChange={e =>
              setFormFields({ ...formFields, lastName: e.target.value })
            }
            error={!!errors.lastName}
          />
        </>
      );

    case 3:
      return (
        <>
          <InputField
            {...register("phone", {
              required: step === currentStep,
              pattern: PHONE_VALIDATION_PATTERN,
            })}
            name="phone"
            label="Номер телефона"
            errorText="В формате +375 (xx) xxx-xx-xx"
            type="tel"
            fullWidth
            value={formFields.phone}
            onChange={e =>
              setFormFields({ ...formFields, phone: e.target.value })
            }
            bottomOffset="mb-4"
            error={!!errors.phone}
          />

          <InputField
            {...register("email", {
              required: step === currentStep,
              pattern: EMAIL_VALIDATION_PATTERN,
            })}
            name="email"
            label="E-mail"
            errorText="Введите корректный e-mail"
            fullWidth
            value={formFields.email}
            type="text"
            onChange={e =>
              setFormFields({ ...formFields, email: e.target.value })
            }
            error={!!errors.email}
          />
        </>
      );

    default:
      return null;
  }
};

export const getButtonText = (step: number) => {
  switch (step) {
    case 1:
      return "Следующий шаг";

    case 2:
      return "последний шаг";

    case 3:
      return "зарегистрироваться";

    default:
      return "";
  }
};
