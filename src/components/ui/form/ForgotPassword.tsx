import { FC } from "react";
import axios from "axios";
import { Typo } from "@/components/ui";

const ForgotPassword: FC<{ error: unknown }> = ({ error }) => {
  return (
    <div className="pl-3">
      {error && axios.isAxiosError(error) ? (
        <Typo fw="medium" className=" text-xs text-dark">
          <span className="text-error">Неверный логин или пароль!</span>
          <br />
          Восстановить?
        </Typo>
      ) : (
        <Typo fw="medium" className=" text-xs text-gray-500">
          Забыли логин или пароль?
        </Typo>
      )}
    </div>
  );
};

export default ForgotPassword;
