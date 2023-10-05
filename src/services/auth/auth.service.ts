import axios from "axios";
import { UrlConfig } from "@/api/url.config.ts";
import {
  LoginFormFields,
  RegisterFormFields,
} from "@/components/ui/form/types.ts";
import { IUser } from "@/shared/types/user.interface.ts";
import {
  saveToStorage,
  saveUserToStorage,
} from "@/services/auth/auth.helper.ts";

export interface AuthResponse {
  jwt: string;
  user: IUser;
}

export const AuthService = {
  async register(data: RegisterFormFields) {
    return axios.post<AuthResponse>(
      `${import.meta.env.VITE_API_URL}${UrlConfig.REGISTER}`,
      data
    );
  },

  async login(data: LoginFormFields) {
    const response = await axios.post<AuthResponse>(
      `${import.meta.env.VITE_API_URL}${UrlConfig.LOGIN}`,
      data
    );

    if (response.data.jwt) {
      saveToStorage(response.data.jwt);

      const userResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}${UrlConfig.USER}/me`,
        {
          headers: {
            Authorization: `Bearer ${response.data.jwt}`,
          },
        }
      );

      saveUserToStorage(userResponse.data);
    }

    return response;
  },
};
