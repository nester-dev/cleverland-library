import { IUser } from "@/shared/types/user.interface.ts";
import { RegisterFormFields } from "@/components/ui/form/types.ts";

export const getDefaultPersonalData = (
  user?: IUser | null
): RegisterFormFields => ({
  username: user?.username,
  firstName: user?.firstName,
  password: "********",
  email: user?.email,
  phone: user?.phone,
  lastName: user?.lastName,
});
