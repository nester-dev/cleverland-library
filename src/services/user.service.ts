import { instance } from "@/api/api.interceptor.ts";
import { UrlConfig } from "@/api/url.config.ts";
import { IUser, UpdateUserRequest } from "@/shared/types/user.interface.ts";

export const UserService = {
  async getCurrentUser() {
    return instance<IUser>({
      url: `${UrlConfig.ME}`,
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

  async uploadAvatar({
    userId,
    data,
  }: {
    userId?: string | number;
    data?: FormData;
  }) {
    return instance<{ id: number }[]>({
      url: `${UrlConfig.UPLOAD}/${userId}`,
      method: "PUT",
      data,
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};
