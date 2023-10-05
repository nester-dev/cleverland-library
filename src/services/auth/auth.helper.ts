import Cookies from "js-cookie";
import { IUser } from "@/shared/types/user.interface.ts";

export const getAccessToken = () => {
  return Cookies.get("accessToken");
};

export const saveTokenToStorage = (token: string) => {
  Cookies.set("accessToken", token);
};

export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem("user") || "{}");
};

export const saveToStorage = (jwt: string) => {
  saveTokenToStorage(jwt);
};

export const saveUserToStorage = (user: IUser) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeFromStorage = () => {
  Cookies.remove("accessToken");
  localStorage.removeItem("user");
};
