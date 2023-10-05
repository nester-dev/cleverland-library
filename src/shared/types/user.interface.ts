import {
  IBooking,
  IDelivery,
  IFeedback,
} from "@/shared/types/book.interface.ts";
import { RegisterFormFields } from "@/components/ui/form/types.ts";

export interface IRole {
  id: number;
  name: string;
  description: string;
  type: string;
}

export interface IAuthUserResponse {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface IUser extends IAuthUserResponse {
  role: IRole;
  comments: IFeedback[];
  avatar: string;
  booking: IBooking;
  delivery: IDelivery;
}

export interface IFeedbackUser extends Pick<IUser, "firstName" | "lastName"> {
  avatarUrl?: string;
  commentUserId: number;
}

export interface UpdateUserRequest {
  userId?: string;
  data?: RegisterFormFields & { avatar?: number };
}
