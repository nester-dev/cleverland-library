import { FC } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { removeFromStorage } from "@/services/auth/auth.helper.ts";

const UserMenuButtons: FC = () => {
  const navigation = useNavigate();
  const handleLogout = () => {
    removeFromStorage();
    navigation("/auth", { replace: true });
  };
  return (
    <>
      <Link to="/profile">Профиль</Link>
      <button type="button" onClick={handleLogout}>
        Выход
      </button>
    </>
  );
};

export default UserMenuButtons;
