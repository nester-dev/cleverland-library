/* eslint-disable @typescript-eslint/no-explicit-any */

import { IFeedbackUser } from "@/shared/types/user.interface.ts";

export interface ICategory {
  name: string;
  path: string;
  id: number | string;
  booksCount?: number;
}

export interface IBookImage {
  url: string;
}

export interface IFeedback {
  id: number;
  rating: number;
  text: string;
  createdAt: string;
  user: IFeedbackUser;
}

export interface IFeedbackRequest {
  bookId: number | string;
  rating: number;
  text: string;
  userId: IFeedbackUser;
}

export interface IBookingRequest {
  order?: boolean;
  dateOrder: Date;
  book: string;
  customer: string;
}

export interface IBooking {
  id: number;
  order: boolean;
  dateOrder: Date;
  customerId: number;
  customerFirstName: string;
  customerLastName: string;
}

export interface IDelivery {
  id: number;
  handed: boolean;
  dateHandedFrom: Date;
  dateHandedTo: Date;
  recipientId: number;
  recipientFirstName: string;
  recipientLastName: string;
}

export interface IBook extends Record<string, any> {
  id: number;
  title: string;
  rating: number;
  issueYear: string;
  description: string;
  publish: string;
  pages: string;
  cover: string;
  weight: string;
  format: string;
  ISBN: string;
  producer: string;
  authors: string[];
  image: IBookImage;
  images: IBookImage[];
  categories: string[];
  comments: IFeedback[];
  booking: IBooking | null;
  delivery: IDelivery | null;
  histories: [
    {
      id: 1;
      userId: 7;
    },
  ];
}
