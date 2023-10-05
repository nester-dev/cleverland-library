import { instance } from "@/api/api.interceptor.ts";
import { UrlConfig } from "@/api/url.config.ts";
import { HttpMethod } from "@/api/methods.ts";
import { IFeedbackRequest } from "@/shared/types/book.interface.ts";

export const CommentService = {
  async leaveFeedback(data: IFeedbackRequest) {
    return instance({
      url: UrlConfig.COMMENTS,
      method: HttpMethod.POST,
      data,
    });
  },
};
