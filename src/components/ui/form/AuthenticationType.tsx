import { FC } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { Typo } from "@/components/ui";
import { ReactComponent as Arrow } from "@/assets/icons/arrow_next.svg";
import { Routes } from "@/shared/constants.ts";

const AuthenticationType: FC = () => {
  const { pathname } = useLocation();
  const isLoginPage = pathname === Routes.AUTH;

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
      <Typo className="text-gray-600">
        {isLoginPage ? "Нет учётной записи?" : "Есть учётная запись?"}
      </Typo>
      <Link
        to={isLoginPage ? Routes.REGISTRATION : Routes.AUTH}
        className="flex items-center gap-3 text-xs font-semibold uppercase"
      >
        <span>{isLoginPage ? "Регистрация" : "Войти"}</span>
        <Arrow />
      </Link>
    </div>
  );
};

export default AuthenticationType;
