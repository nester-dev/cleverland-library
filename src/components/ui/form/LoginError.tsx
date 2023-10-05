import { FC } from "react";
import FormTitle from "@/components/ui/form/FormTitle.tsx";
import { Typo } from "@/components/ui";
import FormButton from "@/components/ui/form/FormButton.tsx";

const LoginError: FC = () => {
  return (
    <>
      <FormTitle center>Вход не выполнен</FormTitle>
      <Typo fw="medium" className="text-gray-500">
        Что-то пошло не так. Попробуйте еще раз.
      </Typo>
      <FormButton>Повторить</FormButton>
    </>
  );
};

export default LoginError;
