import { instance } from "@/api/api.interceptor.ts";
import { UrlConfig } from "@/api/url.config.ts";
import { HttpMethod } from "@/api/methods.ts";
import { IBookingRequest } from "@/shared/types/book.interface.ts";

export const BookingServices = {
  async borrowBook(data: IBookingRequest) {
    return instance({
      url: UrlConfig.BOOKING,
      method: HttpMethod.POST,
      data,
    });
  },

  async changeBorrowDate({
    data,
    bookingId,
  }: {
    bookingId: string;
    data: IBookingRequest;
  }) {
    return instance({
      url: `${UrlConfig.BOOKING}/${bookingId}`,
      method: HttpMethod.PUT,
      data,
    });
  },

  async cancelBorrow(bookingId?: number) {
    return instance({
      url: `${UrlConfig.BOOKING}/${bookingId}`,
      method: HttpMethod.DELETE,
    });
  },
};
