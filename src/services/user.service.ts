import { instance } from "@/api/api.interceptor.ts";
import { UrlConfig } from "@/api/url.config.ts";
import { IUser, UpdateUserRequest } from "@/shared/types/user.interface.ts";

export const UserService = {
  async getCurrentUser() {
    return instance<IUser>({
      url: `${UrlConfig.USER}/me`,
      method: "GET",
    });
  },

  async updateUser({ userId, data }: UpdateUserRequest) {
    return instance({
      url: `${UrlConfig.USER}/${userId}`,
      method: "PUT",
      data,
    });
  },

  async uploadAvatar(data?: FormData) {
    return instance<{ id: number }[]>({
      url: UrlConfig.UPLOAD,
      method: "POST",
      data,
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};
