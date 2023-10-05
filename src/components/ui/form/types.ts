export type InputType =
  | "button"
  | "email"
  | "hidden"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "url";

export type InputAdditionalProps = {
  isActive?: boolean;
  isFocused?: boolean;
};

export interface LoginFormFields {
  identifier: string;
  password?: string;
}

export interface RegisterFormFields
  extends Omit<LoginFormFields, "identifier"> {
  username?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
}
