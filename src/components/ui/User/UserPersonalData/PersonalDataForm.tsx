import { FC } from "react";
import { useFormContext } from "react-hook-form";
import InputField from "@/components/ui/form/InputField.tsx";
import { RegisterFormFields } from "@/components/ui/form/types.ts";
import {
  EMAIL_VALIDATION_PATTERN,
  LOGIN_VALIDATION_PATTERN,
  PASSWORD_VALIDATION_PATTERN,
} from "@/components/ui/form/patterns.ts";

interface Props {
  isEditing: boolean;
}

const PersonalDataForm: FC<Props> = ({ isEditing }) => {
  const {
    register,
    formState: { defaultValues, errors, touchedFields },
  } = useFormContext<RegisterFormFields>();

  return (
    <form className="flex w-full flex-col gap-[30px] md:flex-row">
      <div className="flex flex-1 flex-col gap-3 md:gap-4">
        <InputField
          {...register("username", {
            validate: {
              empty: value => !!value?.length || "Поле не может быть пустым",
              pattern: value =>
                !touchedFields?.username ||
                value?.match(LOGIN_VALIDATION_PATTERN) ||
                "Используйте для логина латинский алфавит и цифры",
            },
          })}
          label="Логин"
          helperText={
            isEditing ? "Используйте для логина латинский алфавит и цифры" : ""
          }
          fullWidth
          disabled={!isEditing}
          defaultValue={defaultValues?.username}
          errorText={errors.username?.message}
          error={!!errors.username}
        />

        <InputField
          label="Имя"
          {...register("firstName")}
          errorText="Поле не может быть пустым"
          fullWidth
          disabled={!isEditing}
          defaultValue={defaultValues?.firstName}
        />

        <InputField
          label="Номер телефона"
          {...register("phone")}
          helperText={isEditing ? "В формате +375 (xx) xxx-xx-xx" : ""}
          type="tel"
          fullWidth
          disabled={!isEditing}
          defaultValue={defaultValues?.phone}
          error={!!errors.phone}
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 md:gap-4">
        <InputField
          label="Пароль"
          {...register("password", {
            pattern: touchedFields?.password
              ? PASSWORD_VALIDATION_PATTERN
              : undefined,
          })}
          helperText={
            isEditing
              ? "Пароль не менее 8 символов, с заглавной буквой и цифрой"
              : ""
          }
          fullWidth
          type="password"
          iconRight
          disabled={!isEditing}
          defaultValue={defaultValues?.password}
          errorText={errors.password?.message}
          error={!!errors.password}
        />

        <InputField
          label="Фамилия"
          {...register("lastName")}
          errorText="Поле не может быть пустым"
          helperText="asdasd"
          fullWidth
          disabled={!isEditing}
          defaultValue={defaultValues?.lastName}
        />

        <InputField
          label="E-mail"
          {...register("email", {
            validate: {
              empty: value => !!value?.length || "Поле не может быть пустым",
              pattern: value =>
                value?.match(EMAIL_VALIDATION_PATTERN) ||
                "Введите корректный e-mail",
            },
          })}
          fullWidth
          disabled={!isEditing}
          defaultValue={defaultValues?.email}
          errorText={errors.email?.message}
          error={!!errors.email}
        />
      </div>
    </form>
  );
};

export default PersonalDataForm;
