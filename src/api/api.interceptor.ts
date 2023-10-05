import axios from "axios";
import { getAccessToken } from "@/services/auth/auth.helper.ts";
import { getContentType } from "@/api/api.helper.ts";

const baseURL = import.meta.env.VITE_API_URL;
export const instance = axios.create({
  baseURL,
  headers: getContentType(),
});

instance.interceptors.request.use(async config => {
  const accessToken = getAccessToken();

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
