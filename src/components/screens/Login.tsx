import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router";
import InputField from "@/components/ui/form/InputField.tsx";
import FormTitle from "@/components/ui/form/FormTitle.tsx";
import ForgotPassword from "@/components/ui/form/ForgotPassword.tsx";
import AuthenticationType from "@/components/ui/form/AuthenticationType.tsx";
import FormWrapper from "@/components/ui/form/FormWrapper.tsx";
import { LoginFormFields } from "@/components/ui/form/types.ts";
import { AuthService } from "@/services/auth/auth.service.ts";
import FormButton from "@/components/ui/form/FormButton.tsx";
import LoginError from "@/components/ui/form/LoginError.tsx";
import { Routes } from "@/shared/constants.ts";

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>({ reValidateMode: "onSubmit" });
  const navigate = useNavigate();

  const { mutate, isLoading, error } = useMutation(
    ["login"],
    AuthService.login,
    {
      onSuccess: () => {
        navigate(Routes.HOME, { replace: true });
      },
    }
  );
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const isServerError =
    error && axios.isAxiosError(error) && error.response?.status !== 400;

  const onSubmit: SubmitHandler<LoginFormFields> = data => {
    mutate(data);
  };

  return (
    <FormWrapper submit={handleSubmit(onSubmit)} isLoading={isLoading}>
      {isServerError ? (
        <LoginError />
      ) : (
        <>
          <FormTitle>Вход в личный кабинет</FormTitle>

          <div>
            <InputField
              {...register("identifier", { required: true })}
              name="identifier"
              label="Логин"
              errorText="Поле не может быть пустым"
              fullWidth
              value={login}
              onChange={e => setLogin(e.target.value)}
              bottomOffset="mb-4"
              error={!!errors.identifier}
            />

            <InputField
              {...register("password", { required: true })}
              name="password"
              label="Пароль"
              errorText="Поле не может быть пустым"
              fullWidth
              value={password}
              type="password"
              onChange={e => setPassword(e.target.value)}
              error={!!errors.password}
            />
            <ForgotPassword error={error} />
          </div>

          <div className="flex flex-col gap-4">
            <FormButton>Вход</FormButton>

            <AuthenticationType />
          </div>
        </>
      )}
    </FormWrapper>
  );
};

export default Login;
