import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { Layout } from "@/components/layout";
import {
  getAccessToken,
  getUserFromStorage,
} from "@/services/auth/auth.helper.ts";
import { useUserStore } from "@/store/userStore.ts";
import { Routes } from "@/shared/constants.ts";

const AuthProvider: FC = () => {
  const user = getUserFromStorage();
  const token = getAccessToken();
  const location = useLocation();
  const navigate = useNavigate();
  const setUser = useUserStore(state => state.setUser);

  useEffect(() => {
    if (!user || !user?.id || !token) {
      location.pathname !== Routes.AUTH &&
        navigate(Routes.AUTH, { replace: true });
    } else {
      setUser(user);
    }
  }, []);

  return !token ? null : <Layout />;
};

export default AuthProvider;
